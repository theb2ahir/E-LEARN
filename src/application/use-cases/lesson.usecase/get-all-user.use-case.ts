import { Lesson } from "../../../domain/entities/lesson.entity";
import { lessonService } from "../../services/lesson.service";


class getAllLesson {

    constructor(private readonly lessonService: lessonService ) {}

    async execute(): Promise<Lesson[]> {
        return await this.lessonService.getAllLesson();
    }
}