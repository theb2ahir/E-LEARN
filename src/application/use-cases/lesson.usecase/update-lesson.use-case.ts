import { Lesson } from "../../../domain/entities/lesson.entity";
import { lessonService } from "../../services/lesson.service";



class updateLesson {

    constructor(private readonly lessonService: lessonService ) {}

    async execute(lesson: Partial<Lesson>): Promise<Lesson> {
        return await this.lessonService.updateLesson(lesson);
    }
}