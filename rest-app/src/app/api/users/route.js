import users from "@/app/mock-data/users";
import { NextResponse } from "next/server";


//get all users 
export async function GET(req) {
    return NextResponse.json(users)
}

export async function POST(req) {
    //read input from the user
    const payload = await req.json()
    const newUser = {
        id: users.length + 1,
        ...payload
    }
    users.push(newUser)
    return NextResponse.json(newUser, { status: 201 })
}