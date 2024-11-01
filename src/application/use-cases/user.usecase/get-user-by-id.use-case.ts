import { User } from "../../../domain/entities/user.entity";
import { UserService } from "../../services/user.service";


export class GetUserById {

    constructor(private readonly userService: UserService ) {}

    async execute(id: number): Promise<User> {
        return await this.userService.getUserById(id);
    }
}