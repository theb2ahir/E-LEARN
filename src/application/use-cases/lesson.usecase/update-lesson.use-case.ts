import { Lesson } from "../../../domain/entities/lesson.entity";
import { LessonService } from "../../services/lesson.service";



export class UpdateLesson {

    constructor(private readonly lessonService: LessonService ) {}

    async execute(lesson: Partial<Lesson>): Promise<Lesson> {
        return await this.lessonService.updateLesson(lesson);
    }
}