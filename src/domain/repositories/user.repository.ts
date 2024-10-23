import { promises } from "dns";
import { User } from "../entities/user.entity";

export interface IUserRepository {
    create(user: User) : Promise<User>;
    update(user: Partial<User>): Promise<User>;
    getById (id: number): Promise<User>;
    delete(id: number): Promise<boolean>;
    getAllUsers(): Promise<User[]>;
}