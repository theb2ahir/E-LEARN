import { User } from "../../../domain/entities/user.entity";
import { UserService } from "../../services/user.service";


class  deleteUser {

    constructor(private readonly userService: UserService ){}

    async execute(id: number): Promise<boolean> {
        return await this.userService.deleteUser(id)
    }
}