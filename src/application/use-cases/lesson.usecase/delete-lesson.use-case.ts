import { Lesson } from "../../../domain/entities/lesson.entity";
import { lessonService } from "../../services/lesson.service";


class deleteLesson {

    constructor(private readonly lessonService: lessonService ) {}

    async execute(id: number): Promise<boolean> {
        return await this.lessonService.deleteLesson(id);
    }
}