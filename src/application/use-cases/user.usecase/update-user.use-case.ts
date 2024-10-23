import { User } from "../../../domain/entities/user.entity";
import { UserService } from "../../services/user.service";


class updateUser {

    constructor(private readonly userService: UserService){}

    async execute(user : Partial<User>): Promise<User> {
        return await this.userService.updateUser(user);
    }
}