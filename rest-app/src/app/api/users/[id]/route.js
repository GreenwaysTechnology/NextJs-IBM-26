import users from "@/app/mock-data/users";
import { NextResponse } from "next/server";


//get users by id
// export async function GET(req,obj) {
//     const myparams = await obj.params 
//     return NextResponse.json({ message: myparams.id })
// }
export async function GET(req, { params }) {
    const id = (await params).id
    const user = users.find(tmpUser => tmpUser.id === +id)
    if (!user) {
        return NextResponse.json({ error: `User ${id} not found` }, { status: 404 })
    }

    return NextResponse.json(user)
}

//update logic
export async function PUT(req, { params }) {

    return NextResponse.json({ message: 'Todo : implement put logic' })
}

//delete logic

export async function DELETE(req, { params }) {
    return NextResponse.json({ message: 'Todo : implement delete logic' })

}