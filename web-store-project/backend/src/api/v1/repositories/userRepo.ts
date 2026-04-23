import { prisma } from "../../../../lib/prisma";

export async function getUserById(id: string) {
    return await prisma.user.findUnique({ where: { id } });
}

export async function createUser(id: string) {
    return await prisma.user.create({ data: { id } });
}