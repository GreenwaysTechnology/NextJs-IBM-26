'use server'

import { prisma } from "@/app/lib/prisma";

export async function getUsers() {
    return await prisma.user.findMany({ orderBy: { id: "desc" } });
}

export async function addUser(name: any, email: any) {
    await prisma.user.create({ data: { name, email } });
}
export async function updateUser(id: any, name: any, email: any) {
    await prisma.user.update({
        where: { id: Number(id) },
        data: { name, email },
    });
}
export async function deleteUser(id:any) {
    await prisma.user.delete({ where: { id: Number(id) } });
}
