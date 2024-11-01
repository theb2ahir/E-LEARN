export class Lesson {

    id: number;

    courseId: number;

    name: string;

    description: string;

    createTime: Date;


    constructor(id:number, courseId:number, name:string, description:string, createTime:Date){
        this.id = id,
        this.courseId = courseId,
        this.name = name,
        this.description = description,
        this.createTime = createTime
    }

    static toLesson(id:number, courseId:number,name:string, description:string, createTime:Date){
        return new Lesson(id,courseId ,name, description, createTime )
    }
}