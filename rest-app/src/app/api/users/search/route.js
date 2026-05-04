import { NextResponse } from "next/server"

// Task: wrap the biz logic to filter data based on email
export async function GET(req) {
    //read query param
    const { searchParams } = new URL(req.url)
    const email = searchParams.get('email')
    return NextResponse.json({ message: email })
}