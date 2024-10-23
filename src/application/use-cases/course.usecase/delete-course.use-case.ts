import { courseService } from "../../services/course.service";


class deleteCourse {

    constructor(private readonly courseService: courseService ) {}

    async execute(id: number): Promise<boolean> {
        return await this.courseService.deleteCourse(id);
    }
}