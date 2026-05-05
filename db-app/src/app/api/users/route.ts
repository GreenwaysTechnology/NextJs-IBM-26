import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}

export async function POST(req: NextRequest) {
    try {
        const user = await req.json()
        const res = await prisma.user.create({
            data: user
        })
        return NextResponse.json(res, {
            status: 201, headers: {
                'Content-Type': "application/json", "url": 'api/create'
            }
        })
    }
    catch (err) {
        return NextResponse.json({ err: err }, { status: 500 })
    }
}