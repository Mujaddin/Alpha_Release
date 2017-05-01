export class Employee {
    public constructor(
    public id:number, 
    public lastname:string ,
    public firstname:string,
    public gender:string,
    public dob:Date,
    public status:string,
    public datehire:Date,
    public datesusp:Date,
    public nation:string,
    public maried:string,
    public phone:string, 
    public subdiv:string, 
    public division:string, 
    public grade:string, 
    public email:string,
    public imgpath:string,
    public name=firstname+' '+lastname, ){}

}
