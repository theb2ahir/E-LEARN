import { Lesson } from "../../../domain/entities/lesson.entity";
import { lessonService } from "../../services/lesson.service";


class getLessonById {

    constructor(private readonly lessonService: lessonService ) {}

    async execute(id: number): Promise<Lesson> {
        return await this.lessonService.getLessonById(id);
    }
}