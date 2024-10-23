import { User } from "../../../domain/entities/user.entity";
import { UserService } from "../../services/user.service";


class getUserById {

    constructor(private readonly userService: UserService ) {}

    async execute(id: number): Promise<User> {
        return await this.userService.getUserById(id);
    }
}