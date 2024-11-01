export class Course {
    
    id: number;

    name: string;

    description: string;

    imageUrl: string;

    createTime: Date;

    constructor(id:number, name:string, description:string, imageUrl:string, createTime:Date){
        this.id = id,
        this.name = name,
        this.description = description,
        this.imageUrl = this.imageUrl,
        this.createTime = createTime
    }

    static toCourse(id:number, name:string, description:string, imageUrl:string, createTime:Date){
        return new Course(id, name, description, imageUrl, createTime)
    }

}