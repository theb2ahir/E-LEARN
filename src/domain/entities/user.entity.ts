export class User {
    id: number;

    name: string;

    password: number;

    career: string;

    email: string;

    createTime: Date;

    constructor(id:number, name:string, password:number, career:string, email:string, createTime:Date){
        this.id = id,
        this.name = name,
        this.password = password,
        this.career = career,
        this.email = email,
        this.createTime = createTime
    }

    static toUser(id:number, name:string, password:number, career:string, email:string, createTime:Date){
        return new User(id, name, password, career, email, createTime)
    }
}