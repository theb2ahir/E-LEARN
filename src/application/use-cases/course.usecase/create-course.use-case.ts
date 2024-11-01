import { Course } from "../../../domain/entities/course.entity";
import { CourseService } from "../../services/course.service";

export class CreateCourse {

    constructor(private readonly courseService: CourseService ) {}

    async execute(course: Course): Promise<Course> {
        return await this.courseService.createCourse(course);
    }
}