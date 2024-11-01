import { Lesson } from "../../../domain/entities/lesson.entity";
import { LessonService } from "../../services/lesson.service";


export class GetAllLesson {

    constructor(private readonly lessonService: LessonService ) {}

    async execute(): Promise<Lesson[]> {
        return await this.lessonService.getAllLesson();
    }
}