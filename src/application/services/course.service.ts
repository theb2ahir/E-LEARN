import { Course } from "../../domain/entities/course.entity";
import { ICourseRepository } from "../../domain/repositories/course.repository";


export class CourseService {

    constructor( private readonly courseRepository: ICourseRepository){}

    async createCourse(course:  Course): Promise<Course> {
        return await this.courseRepository.create(course);
    }

    async deleteCourse(id: number): Promise<boolean> {
        return await this.courseRepository.delete(id)
    }

    async getCourseById(id: number): Promise<Course> {
        return await this.courseRepository.getById(id);
    }

    async updateCourse(course: Partial<Course>): Promise<Course> {
        return await this.courseRepository.update(course);
    }

    async getAllCourse(): Promise<Course[]> {
        return await this.courseRepository.getAllCourse();
    }
}