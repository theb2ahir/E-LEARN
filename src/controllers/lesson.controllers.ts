import { LessonService } from "../application/services/lesson.service";
import { CreateLesson } from "../application/use-cases/lesson.usecase/create-lesson.use-case";
import { DeleteLesson } from "../application/use-cases/lesson.usecase/delete-lesson.use-case";
import { GetAllLesson } from "../application/use-cases/lesson.usecase/get-all-user.use-case";
import { GetLessonById } from "../application/use-cases/lesson.usecase/get-lesson-by-id.use-case";
import { UpdateLesson } from "../application/use-cases/lesson.usecase/update-lesson.use-case";
import { Lesson } from "../domain/entities/lesson.entity";
import { LessonRepositoryImpl } from "../infrastructure/persistence/repositories.implement/lesson.repository.impl";

export class LessonController {
    private createLesson: CreateLesson;
    private updateLesson: UpdateLesson;
    private deleteLesson: DeleteLesson;
    private getAllLesson: GetAllLesson;
    private getLessonById: GetLessonById;
    constructor() {
        const lessonRepo = new LessonRepositoryImpl();
        const lessonService = new LessonService(lessonRepo)
        this.createLesson = new CreateLesson(lessonService)
        this.updateLesson = new UpdateLesson(lessonService)
        this.deleteLesson = new DeleteLesson(lessonService)
        this.getAllLesson = new GetAllLesson(lessonService)
        this.getLessonById = new GetLessonById(lessonService)

    }

    async createLessonCtrl (req: any, res: any): Promise<void> {

        const { id, courseId, name, description, createTime } = req.body;
    
        if (courseId === undefined || name === undefined || description === undefined || createTime === undefined) {
            res.status(400).jscon({message: 'Missing paramaters'});
            return;
        }
        try {
            const lesson = new Lesson(0, courseId, name, description, createTime );
            const newLesson = await this.createLesson.execute(lesson);
            res.status(200).json({data: newLesson, message: "Request successful"})
        }
        catch  (error) {
            console.error("error :", error)
            res.status(500).json({message: "Server error"})
        }
    }

    async updateLessonCtrl (req : any, res: any): Promise<void> {
        const { id, courseId, name, description, createTime } = req.body;

        if ( id === undefined ) {
            res.status(400).json({message: 'Missing id'})
            return; 
        }
        try {
            const lesson = new Lesson(id , courseId ,name, description, createTime );
            const newLesson = await this.updateLesson.execute(lesson);
            res.status(200).json({data: newLesson, message: "Request successful"})
        }
        catch (error) {
            console.error("error :", error)
            res.status(500).json({message: "Server error"})
        }
    }

    async deleteLessonCtrl ( req: any, res: any): Promise<void> {
        const { id } = req.body;

        if (id === undefined) {
            res.status(400).json({message: 'Missing id'})
            return; 
        }
        try {
            const result = await this.deleteLesson.execute(id);
            res.status(200).json({data: result, message: "Request successful"})
        }
        catch (error) {
            console.error("error :", error)
            res.status(500).json({message: "Server error"})
        }
    }

    async getAllLessonCtrl ( req: any, res: any): Promise<void> {

        try {
            const Lessons = await this.getAllLesson.execute();
            res.status(200).json({data: Lessons , message: "Request successful"})
        }
        catch (error) {
            console.error("error :", error)
            res.status(500).json({message: "Server error"})
        }

    }

    async getLessonByIdCtrl (req: any, res: any): Promise<void> {
        const {id} = req.body;

        if (id === undefined) {
            res.status(400).json({message: 'Missing id'})
            return; 
        }
        try {
            const Lesson = await this.getLessonById.execute(id);
            res.status(200).json({data: Lesson, message: "Request successful"})
        }
        catch (error) {
            console.error("error :", error)
            res.status(500).json({message: "Server error"})
        }

    }





}