import { Course } from "../../../domain/entities/course.entity";
import { CourseService } from "../../services/course.service";


export class UpdateCourse {

    constructor(private readonly courseService: CourseService ) {}

    async execute(course: Partial<Course>): Promise<Course> {
        return await this.courseService.updateCourse(course);
    }
}