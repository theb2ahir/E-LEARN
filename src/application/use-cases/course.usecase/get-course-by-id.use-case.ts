import { Course } from "../../../domain/entities/course.entity";
import { courseService } from "../../services/course.service";


class geCourseById {

    constructor(private readonly courseService: courseService ) {}

    async execute(id: number): Promise<Course> {
        return await this.courseService.getCourseById(id);
    }
}