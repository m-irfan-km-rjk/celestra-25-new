// app/api/events/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma'; // adjust import path if needed

export const dynamic = 'force-dynamic';

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS(req: NextRequest) {
    return NextResponse.json(
        { ok: true },
        {
            status: 204,
            headers: CORS_HEADERS,
        }
    );
}

export async function GET(req: NextRequest) {
    try {
        // groupBy eventname and count
        const events = await prisma.register.groupBy({
            by: ['eventname'],
            _count: {
                eventname: true,
            },
        });

        return NextResponse.json(events, {
            status: 200,
            headers: CORS_HEADERS,
        });
    } catch (error) {
        console.error('Error fetching event details:', error);
        return NextResponse.json(
            {
                error: 'Error fetching event details with registration counts',
                details: String(error),
            },
            {
                status: 500,
                headers: CORS_HEADERS,
            }
        );
    }
}