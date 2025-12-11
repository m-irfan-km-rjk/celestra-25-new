// app/api/registrations/route.ts
import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma'; // adjust path if your project layout differs

const CORS_HEADERS = {
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*', // set a specific origin in production
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS(req: NextRequest) {
    return new NextResponse(null, {
        status: 204,
        headers: CORS_HEADERS,
    });
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const eventlink = body?.eventlink;

        if (!eventlink) {
            return NextResponse.json(
                { error: 'Missing eventlink in request body' },
                { status: 400, headers: CORS_HEADERS }
            );
        }

        const eventRegistrations = await prisma.register.findMany({
            where: { eventname: eventlink },
        });

        return NextResponse.json(eventRegistrations, { status: 200, headers: CORS_HEADERS });
    } catch (err) {
        console.error('Error fetching registrations:', err);
        return NextResponse.json(
            { error: 'Unable to fetch registrations', details: String(err) },
            { status: 500, headers: CORS_HEADERS }
        );
    }
}