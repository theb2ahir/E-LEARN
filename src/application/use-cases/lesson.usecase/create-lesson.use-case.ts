import { Lesson } from "../../../domain/entities/lesson.entity";
import { lessonService } from "../../services/lesson.service";


class createLesson {

    constructor(private readonly lessonService: lessonService ) {}

    async execute(lesson: Lesson): Promise<Lesson> {
        return await this.lessonService.createLesson(lesson);
    }
}