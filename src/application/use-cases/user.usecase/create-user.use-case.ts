import { User } from "../../../domain/entities/user.entity";
import { UserService } from "../../services/user.service";


export class CreateUser {

    constructor(private readonly userService: UserService ) {}

    async execute(user: User): Promise<User> {
        return await this.userService.createUser(user);
    }
}