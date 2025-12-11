import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

// CORS headers
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
};

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(req: NextRequest) {
    try {
        // 1. Get query parameters using URLSearchParams
        const { searchParams } = new URL(req.url);
        const eventname = searchParams.get('eventname');

        // 2. Validate input
        if (!eventname) {
            return NextResponse.json(
                { error: 'Event name is required as a query parameter' },
                { status: 400, headers: corsHeaders }
            );
        }

        // 3. Fetch count from Prisma
        const registrationCount = await prisma.register.count({
            where: {
                eventname: eventname,
            },
        });

        // 4. Return response
        return NextResponse.json(
            {
                eventname,
                count: registrationCount,
            },
            { status: 200, headers: corsHeaders }
        );
    } catch (error) {
        console.error('Count API Error:', error);
        return NextResponse.json(
            {
                error: 'Error fetching registration count',
                details: error instanceof Error ? error.message : error,
            },
            { status: 500, headers: corsHeaders }
        );
    }
}