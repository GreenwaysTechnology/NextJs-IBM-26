import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, obj: any) {
    try {

        const id = +(await obj.params).id
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, {
                status: 404, headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        return NextResponse.json(user)
    }
    catch (err) {
        return NextResponse.json({ err: err }, { status: 500 })
    }
}
export async function PUT(req: NextRequest, obj: any) {
    try {
        const id = +(await obj.params).id
        const payload = await req.json()
        const tmpUser = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        if (!tmpUser) {
            return NextResponse.json({ message: 'User not found' }, {
                status: 404, headers: {
                    'Content-Type': 'application/json'
                }
            })
        } else {
            const user = await prisma.user.update({
                where: {
                    id: id
                },
                data: payload
            })
            return NextResponse.json(user)

        }
    }
    catch (err) {
        return NextResponse.json({ err: err }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest, obj: any) {
    try {
        const id = +(await obj.params).id
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        if (user) {
            await prisma.user.delete({
                where: {
                    id: id
                }
            })
            return NextResponse.json({ message: `USER with id ${id} has been successfully deleted` }, {
                status: 201, headers: {
                    'Content-Type': 'application/json'
                }
            })
        } else {
            return NextResponse.json({ message: `No User found with ${id}` }, {
                status: 404, headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    catch (err) {
        return NextResponse.json({ err: err }, { status: err.status })
    }
}
