import { Lesson } from "../entities/lesson.entity";


export interface ILessonRepository {
    create(lesson: Lesson): Promise<Lesson>;
    update(lesson: Partial<Lesson>): Promise<Lesson>;
    delete(id: number): Promise<boolean>;
    getById(id: number):Promise<Lesson>;
    getAllLesson(): Promise<Lesson[]>;
}