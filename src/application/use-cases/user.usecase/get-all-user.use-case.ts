import { User } from "../../../domain/entities/user.entity";
import { UserService } from "../../services/user.service";


class getAllUser {

    constructor(private readonly userService: UserService ) {}

    async execute(): Promise<User[]> {
        return await this.userService.getAllUser();
    }
}