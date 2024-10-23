import { Course } from "../entities/course.entity";



export interface ICourseRepository {
    create(id: number): Promise<Course>;
    update(course: Partial<Course>): Promise<Course>;
    delete(id: number): Promise<boolean>;
    getById(id : number): Promise<Course>;
    getAllCourse(): Promise<Course[]>;
}