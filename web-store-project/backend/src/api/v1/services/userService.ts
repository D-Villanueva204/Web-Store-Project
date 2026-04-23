import * as userRepo from "../repositories/userRepo";

export async function getUserById(id: string) {
    return await userRepo.getUserById(id);
}

export async function createUser(id: string) {
    return await userRepo.createUser(id);
}