import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req) {
    //get the user name and password
    const { username, password } = await req.json()
    //lookup the username and password from the db in realtime
    if (username === 'admin' & password === '123') {
        //generate sessionId in realtime but now we use dummy session
        const sessionToken = "admin"
        ///create session and append sessionToken as part of cookie
        const cookieStore = await cookies()
        //set coookie information
        cookieStore.set("session", sessionToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: '/',
            maxAge: 60 * 60 //1 hour valid
        })
        return NextResponse.json({ success: true })
    }
     return Response.json({ success: false, message: 'Invaild Credentials' }, { status: 401 })

}