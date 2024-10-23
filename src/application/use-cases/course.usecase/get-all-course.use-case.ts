import { Course } from "../../../domain/entities/course.entity";
import { courseService } from "../../services/course.service";


class getAllCourse {

    constructor(private readonly courseService: courseService ) {}

    async execute(): Promise<Course[]> {
        return await this.courseService.getAllCourse();
    }
}