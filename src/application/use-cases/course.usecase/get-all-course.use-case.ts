import { Course } from "../../../domain/entities/course.entity";
import { CourseService } from "../../services/course.service";


export class GetAllCourse {

    constructor(private readonly courseService: CourseService ) {}

    async execute(): Promise<Course[]> {
        return await this.courseService.getAllCourse();
    }
}