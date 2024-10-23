import { User } from "../../domain/entities/user.entity";
import { IUserRepository } from "../../domain/repositories/user.repository";


export class UserService {
    constructor(private readonly userRepository: IUserRepository ){}

    async createUser(user:User): Promise<User> {
        return await this.userRepository.create(user)
    }

    async deleteUser(id: number): Promise<boolean> {
        return await this.userRepository.delete(id);
    }

    async updateUser(user: Partial<User>): Promise<User> {
        return await this.userRepository.update(user);
    }

    async getUserById(id: number):Promise<User> {
        return await this.userRepository.getById(id);
    }

    async getAllUser():Promise<User[]> {
        return await this.userRepository.getAllUsers();
    }
}