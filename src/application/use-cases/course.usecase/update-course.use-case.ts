import { Course } from "../../../domain/entities/course.entity";
import { courseService } from "../../services/course.service";


class updateCourse {

    constructor(private readonly courseService: courseService ) {}

    async execute(course: Partial<Course>): Promise<Course> {
        return await this.courseService.updateCourse(course);
    }
}