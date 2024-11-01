import { CourseService } from "../../services/course.service";


export class DeleteCourse {

    constructor(private readonly courseService: CourseService ) {}

    async execute(id: number): Promise<boolean> {
        return await this.courseService.deleteCourse(id);
    }
}