import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
};

// Handle OPTIONS request (CORS Preflight)
export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

// Handle POST request
export async function POST(req: NextRequest) {
    try {
        // 1. Parse the JSON body
        const body = await req.json();

        const {
            member_0, email_0, phone_number_0, college_0, year_0, branch_0, batch_0,
            eventname, isIEIMember, tkm, img_url, transactionid, ieimembershipid, amount,
            member_1, email_1, phone_number_1, college_1, year_1, branch_1, batch_1,
            member_2, email_2, phone_number_2, college_2, year_2, branch_2, batch_2,
            member_3, email_3, phone_number_3, college_3, year_3, branch_3, batch_3,
            member_4, email_4, phone_number_4, college_4, year_4, branch_4, batch_4,
            member_5, email_5, phone_number_5, college_5, year_5, branch_5, batch_5,
            member_6, email_6, phone_number_6, college_6, year_6, branch_6, batch_6,
            referal_id,
        } = body;

        // 2. Check for existing registration
        const existingRegistration = await prisma.register.findFirst({
            where: {
                email_0,
                eventname,
            },
        });

        if (existingRegistration) {
            return NextResponse.json(
                { error: 'User already registered for this event.' },
                { status: 409, headers: corsHeaders }
            );
        }

        // 3. Create new registration
        const newRegistration = await prisma.register.create({
            data: {
                member_0, email_0, phone_number_0, college_0, year_0, branch_0, batch_0,
                eventname, isIEIMember, tkm, img_url, transactionid, ieimembershipid, amount,
                member_1, email_1, phone_number_1, college_1, year_1, branch_1, batch_1,
                member_2, email_2, phone_number_2, college_2, year_2, branch_2, batch_2,
                member_3, email_3, phone_number_3, college_3, year_3, branch_3, batch_3,
                member_4, email_4, phone_number_4, college_4, year_4, branch_4, batch_4,
                member_5, email_5, phone_number_5, college_5, year_5, branch_5, batch_5,
                member_6, email_6, phone_number_6, college_6, year_6, branch_6, batch_6,
                referal_id,
            },
        });

        return NextResponse.json(newRegistration, { status: 201, headers: corsHeaders });

    } catch (error) {
        console.error('Registration Error:', error);
        return NextResponse.json(
            { error: 'Unable to register user', details: error instanceof Error ? error.message : error },
            { status: 400, headers: corsHeaders }
        );
    }
}