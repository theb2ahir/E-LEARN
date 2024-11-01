import { Lesson } from "../../../domain/entities/lesson.entity";
import { LessonService } from "../../services/lesson.service";


export class GetLessonById {

    constructor(private readonly lessonService: LessonService ) {}

    async execute(id: number): Promise<Lesson> {
        return await this.lessonService.getLessonById(id);
    }
}