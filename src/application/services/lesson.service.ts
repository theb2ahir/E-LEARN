import { Lesson } from "../../domain/entities/lesson.entity";
import { ILessonRepository } from "../../domain/repositories/lesson.repository";



export class LessonService {

    constructor(private readonly lessonRepository:ILessonRepository){}

    async createLesson(lesson: Lesson): Promise<Lesson> {
        return await this.lessonRepository.create(lesson);
    }

    async deleteLesson(id: number): Promise<boolean> {
        return  await this.lessonRepository.delete(id);
    }

    async updateLesson(lesson: Partial<Lesson>): Promise<Lesson> {
        return await this.lessonRepository.update(lesson);
    }

    async getLessonById(id: number): Promise<Lesson> {
        return await this.lessonRepository.getById(id);
    }

    async getAllLesson(): Promise<Lesson[]> {
        return await this.lessonRepository.getAllLesson();
    }



}