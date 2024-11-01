import { Course } from "../../../domain/entities/course.entity";
import { ICourseRepository } from "../../../domain/repositories/course.repository";
import Database from "../database.config/db.config";

export class CourseRepositoryImpl implements ICourseRepository {

    private db = Database.getInstance();
    private connection = this.db.getConnection();

    async create(course: Course): Promise<Course> {
        const { id, name, description, imageUrl, createTime } = course;
        const query = "CALL create_course(?, ?, ?)";
        const values = [name, description, imageUrl];

        const [result] = await this.connection.query(query, values);

        const { idDB, nameDB, descriptionDB, imageUrlDB, createTimeDB } = result[0][0];
        return Course.toCourse(idDB, nameDB, descriptionDB, imageUrlDB, createTimeDB);
    }

    async update(course: Partial<Course>): Promise<Course> {
        const { id, name, description, imageUrl, createTime } = course;
        const query = "CALL update_course(?, ?, ?, ?)";
        const values = [id, name, description, imageUrl];

        const [result] = await this.connection.query(query, values);

        const { idDB, nameDB, descriptionDB, imageUrlDB, createTimeDB } = result[0][0];
        return Course.toCourse(idDB, nameDB, descriptionDB, imageUrlDB, createTimeDB);
    }

    async delete(id: number): Promise<boolean> {
        const query = "CALL delete_course(?)";
        const value = [id];

        const [result] = await this.connection.query(query, value);

        return result[0][0] === 0 ? false : true;
    }

    async getById(id: number): Promise<Course> {
        const query = "CALL get_course_by_id(?)";
        const value = [id];

        const [result] = await this.connection.query(query, value);

        const { idDB, nameDB, descriptionDB, imageUrlDB, createTimeDB } = result[0][0];
        return Course.toCourse(idDB, nameDB, descriptionDB, imageUrlDB, createTimeDB);
    }

    async getAllCourse(): Promise<Course[]> {
        const query = "CALL get_all_courses()";

        const [result] = await this.connection.query(query);

        return result[0];
    
    }
}
