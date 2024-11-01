import { CreateUser } from "../application/use-cases/user.usecase/create-user.use-case";
import { DeleteUser } from "../application/use-cases/user.usecase/delete-user.usecase";
import { GetAllUser } from "../application/use-cases/user.usecase/get-all-user.use-case";
import { UpdateUser } from "../application/use-cases/user.usecase/update-user.use-case";
import { GetUserById } from "../application/use-cases/user.usecase/get-user-by-id.use-case";
import { UserRepositoryImpl } from "../infrastructure/persistence/repositories.implement/user.repository.impl";
import { UserService } from "../application/services/user.service";
import { User } from "../domain/entities/user.entity";

export class UserController {
    private createUser: CreateUser;
    private updateUser: UpdateUser;
    private deleteUser: DeleteUser;
    private getAllUser: GetAllUser;
    private getUserById: GetUserById;
    constructor() {
        const userRepo = new UserRepositoryImpl();
        const userService = new UserService(userRepo)
        this.createUser = new CreateUser(userService)
        this.updateUser = new UpdateUser(userService)
        this.deleteUser = new DeleteUser(userService)
        this.getAllUser = new GetAllUser(userService)
        this.getUserById = new GetUserById(userService)

    }

    async createUserCtrl (req: any, res: any): Promise<void> {

    }

    async updateUserCtrl (req : any, res: any): Promise<void> {
        const {id, name, password, career, email, createTime} = req.body;

        if ( id === undefined ) {
            res.status(400).json({message: 'Missing id'})
            return; 
        }
        try {
            const user = new User(id, name, password, career, email, createTime );
            const newUser = await this.updateUser.execute(user);
            res.status(200).json({data: newUser, message: "Request successful"})
        }
        catch (error) {
            console.error("error :", error)
            res.status(500).json({message: "Server error"})
        }
    }

    async deleteUserCtrl ( req: any, res: any): Promise<void> {
        const { id } = req.body;

        if (id === undefined) {
            res.status(400).json({message: 'Missing id'})
            return; 
        }
        try {
            const result = await this.deleteUser.execute(id);
            res.status(200).json({data: result, message: "Request successful"})
        }
        catch (error) {
            console.error("error :", error)
            res.status(500).json({message: "Server error"})
        }
    }

    async getAllUserCtrl ( req: any, res: any): Promise<void> {

        try {
            const Users = await this.getAllUser.execute();
            res.status(200).json({data: Users , message: "Request successful"})
        }
        catch (error) {
            console.error("error :", error)
            res.status(500).json({message: "Server error"})
        }

    }

    async getUserByIdCtrl (req: any, res: any): Promise<void> {
        const {id} = req.body;

        if (id === undefined) {
            res.status(400).json({message: 'Missing id'})
            return; 
        }
        try {
            const User = await this.getUserById.execute(id);
            res.status(200).json({data: User, message: "Request successful"})
        }
        catch (error) {
            console.error("error :", error)
            res.status(500).json({message: "Server error"})
        }

    }





}