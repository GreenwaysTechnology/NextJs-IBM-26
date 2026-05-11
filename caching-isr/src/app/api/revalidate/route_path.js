import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
    //get the path of the revalidation
    const path = request.nextUrl.searchParams.get('path') || '/timecache/Kolkatta'
    //call revalidate api
    revalidatePath(path)
    return NextResponse.json({ revalidate: true, now: new Date(), cache: 'nostore' })
}