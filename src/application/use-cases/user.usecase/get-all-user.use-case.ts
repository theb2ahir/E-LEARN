import { User } from "../../../domain/entities/user.entity";
import { UserService } from "../../services/user.service";


export class GetAllUser {

    constructor(private readonly userService: UserService ) {}

    async execute(): Promise<User[]> {
        return await this.userService.getAllUser();
    }
}