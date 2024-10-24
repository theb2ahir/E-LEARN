import { User } from "../../../domain/entities/user.entity";
import { IUserRepository } from "../../../domain/repositories/user.repository";
import Database from "../database.config/db.config";


export class userRepositoryImpl implements IUserRepository{ 

    private db = Database.getInstance();
    private connection  = this.db.getConnection();

    async create(user: User): Promise<User> {
        const { id, name, password, career, email, createTime } = user;
        const query = "CALL create_user(?, ?, ?, ?)";
        const values = [name, password, career, email, createTime];

        const [result] = await this.connection.query(query, values);
        
        const { idDB, nameDB, passwordDB, careerDB, emailDB, createTimeDB } = result[0][0];
        return User.toUser(idDB, nameDB, passwordDB, careerDB, emailDB, createTimeDB)
    }
    async update(user: Partial<User>): Promise<User> {
        const {id, name, password, career, email, createTime} = user;
        const query = "CALL update_user(?, ?, ?, ?, ?)";
        const values = [name, password, career, email, createTime];

        const [result] = await this.connection.query(query, values);

        const {idDB, nameDB, passwordDB, careerDB, emailDB, createTimeDB}= result[0][0];
        return User.toUser(idDB, nameDB, passwordDB, careerDB, emailDB, createTimeDB)


    }
    async getById(id: number): Promise<User> {
        const query = "CALL get_user_by_id(?)";
        const value = [id];

        const [result] = await this.connection.query(query, value);

        const {idDB, nameDB, passwordDB, careerDB, emailDB, createTimeDB} = result[0][0];
        return User.toUser(idDB, nameDB, passwordDB, careerDB, emailDB, createTimeDB)
    }
    async delete(id: number): Promise<boolean> {
        const query = "CALL delete_user(?)";
        const value = [id];
    
        const [result] = await this.connection.query(query, value);
    
        return result[0][0] == 0 ? false : true; 
    }
    async getAllUsers(): Promise<User[]> {
        const query = "CALL get_all_users()";

        const [result] = await this.connection.query(query);

        return  result[0];
    }
}   