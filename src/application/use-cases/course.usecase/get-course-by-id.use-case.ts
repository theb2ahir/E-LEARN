import { Course } from "../../../domain/entities/course.entity";
import { CourseService } from "../../services/course.service";


export class GetCourseById {

    constructor(private readonly courseService: CourseService ) {}

    async execute(id: number): Promise<Course> {
        return await this.courseService.getCourseById(id);
    }
}