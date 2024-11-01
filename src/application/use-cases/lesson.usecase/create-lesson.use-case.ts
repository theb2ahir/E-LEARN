import { Lesson } from "../../../domain/entities/lesson.entity";
import { LessonService } from "../../services/lesson.service";


export class CreateLesson {

    constructor(private readonly lessonService: LessonService ) {}

    async execute(lesson: Lesson): Promise<Lesson> {
        return await this.lessonService.createLesson(lesson);
    }
}