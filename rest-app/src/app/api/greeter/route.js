import { NextResponse } from "next/server";

export async function GET(req) {
    //return response
    return NextResponse.json({ message: 'Welcome to Rest api' })
}



