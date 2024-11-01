import { CourseService } from "../application/services/course.service";
import { CreateCourse } from "../application/use-cases/course.usecase/create-course.use-case";
import { DeleteCourse } from "../application/use-cases/course.usecase/delete-course.use-case";
import { GetAllCourse } from "../application/use-cases/course.usecase/get-all-course.use-case";
import { GetCourseById } from "../application/use-cases/course.usecase/get-course-by-id.use-case";
import { UpdateCourse } from "../application/use-cases/course.usecase/update-course.use-case";
import { Course } from "../domain/entities/course.entity";
import { CourseRepositoryImpl } from "../infrastructure/persistence/repositories.implement/course.repository.impl";


export class CourseController {

    private createCourse: CreateCourse;
    private updateCourse: UpdateCourse;
    private deleteCourse: DeleteCourse;
    private getCourseById: GetCourseById;
    private getAllCourse: GetAllCourse;

    constructor() {
        const courseRepo = new CourseRepositoryImpl();
        const courseService = new CourseService(courseRepo)
        this.createCourse = new CreateCourse(courseService)
        this.updateCourse = new UpdateCourse(courseService)
        this.deleteCourse = new DeleteCourse(courseService)
        this.getAllCourse = new GetAllCourse(courseService)
        this.getCourseById = new GetCourseById(courseService)
    }

    async createCourseCtrl(req: any, res: any): Promise<void> {

        const { id, name, description, imageUrl, createTime } = req.body;

        if (imageUrl === undefined || name === undefined || description === undefined || createTime === undefined) {
            res.status(400).jscon({ message: 'Missing paramaters' });
            return;
        }
        try {
            const course = new Course(0, imageUrl, name, description, createTime);
            const newCourse = await this.createCourse.execute(course);
            res.status(200).json({ data: newCourse, message: "Request successful" })
        }
        catch (error) {
            console.error("error :", error)
            res.status(500).json({ message: "Server error" })
        }
    }

    async updateCourseCtrl (req : any, res: any): Promise<void> {
        const { id, courseId, name, description, createTime } = req.body;

        if ( id === undefined ) {
            res.status(400).json({message: 'Missing id'})
            return; 
        }
        try {
            const course = new Course(id , courseId ,name, description, createTime );
            const newCourse = await this.updateCourse.execute(course);
            res.status(200).json({data: newCourse, message: "Request successful"})
        }
        catch (error) {
            console.error("error :", error)
            res.status(500).json({message: "Server error"})
        }
    }

    async deleteCourseCtrl ( req: any, res: any): Promise<void> {
        const { id } = req.body;

        if (id === undefined) {
            res.status(400).json({message: 'Missing id'})
            return; 
        }
        try {
            const result = await this.deleteCourse.execute(id);
            res.status(200).json({data: result, message: "Request successful"})
        }
        catch (error) {
            console.error("error :", error)
            res.status(500).json({message: "Server error"})
        }
    }

    async getAllCourseCtrl ( req: any, res: any): Promise<void> {

        try {
            const Courses = await this.getAllCourse.execute();
            res.status(200).json({data: Courses , message: "Request successful"})
        }
        catch (error) {
            console.error("error :", error)
            res.status(500).json({message: "Server error"})
        }

    }

    async getCourseByIdCtrl (req: any, res: any): Promise<void> {
        const {id} = req.body;

        if (id === undefined) {
            res.status(400).json({message: 'Missing id'})
            return; 
        }
        try {
            const Course = await this.getCourseById.execute(id);
            res.status(200).json({data: Course, message: "Request successful"})
        }
        catch (error) {
            console.error("error :", error)
            res.status(500).json({message: "Server error"})
        }

    }



}