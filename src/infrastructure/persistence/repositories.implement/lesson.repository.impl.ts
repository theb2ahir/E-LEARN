import { Lesson } from "../../../domain/entities/lesson.entity";
import { ILessonRepository } from "../../../domain/repositories/lesson.repository";
import Database from "../database.config/db.config";

export class LessonRepositoryImpl implements ILessonRepository {

    private db = Database.getInstance();
    private connection = this.db.getConnection();

    async create(lesson: Lesson): Promise<Lesson> {
        const { id, courseId, name, description, createTime } = lesson;
        const query = "CALL create_lesson(?, ?, ?, ?)";
        const values = [courseId, name, description, createTime];

        const [result] = await this.connection.query(query, values);

        const { idDB, courseIdDB, nameDB, descriptionDB, createTimeDB } = result[0][0];
        return Lesson.toLesson(idDB, courseIdDB, nameDB, descriptionDB, createTimeDB);
    }

    async update(lesson: Partial<Lesson>): Promise<Lesson> {
        const { id, courseId, name, description, createTime } = lesson;
        const query = "CALL update_lesson(?, ?, ?, ?, ?)";
        const values = [id, courseId, name, description, createTime];

        const [result] = await this.connection.query(query, values);

        const { idDB, courseIdDB, nameDB, descriptionDB, createTimeDB } = result[0][0];
        return Lesson.toLesson(idDB, courseIdDB, nameDB, descriptionDB, createTimeDB);
    }

    async delete(id: number): Promise<boolean> {
        const query = "CALL delete_lesson(?)";
        const value = [id];

        const [result] = await this.connection.query(query, value);

        return result[0][0] === 0 ? false : true;
    }

    async getById(id: number): Promise<Lesson> {
        const query = "CALL get_lesson_by_id(?)";
        const value = [id];

        const [result] = await this.connection.query(query, value);

        const { idDB, courseIdDB, nameDB, descriptionDB, createTimeDB } = result[0][0];
        return Lesson.toLesson(idDB, courseIdDB, nameDB, descriptionDB, createTimeDB);
    }

    async getAllLesson(): Promise<Lesson[]> {
        const query = "CALL get_all_lessons()";

        const [result] = await this.connection.query(query);

        return result[0]
        
    }
}
