const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email,school){
        super(name,id,email);
        this.school=school;
    }
    getSchool(){
        //console.log(this.school);
        return this.school;
    }
    
    getRole(){
        //console.log("Role: Intern");
        return "Intern";
    }
}

module.exports=Intern;