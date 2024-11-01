import { Lesson } from "../../../domain/entities/lesson.entity";
import { LessonService } from "../../services/lesson.service";


export class DeleteLesson {

    constructor(private readonly lessonService: LessonService ) {}

    async execute(id: number): Promise<boolean> {
        return await this.lessonService.deleteLesson(id);
    }
}