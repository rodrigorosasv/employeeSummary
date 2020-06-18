const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email,officeNumber){
        super(name,id,email);
        this.officeNumber=officeNumber;
    }
    getOfficeNumber(){
        //console.log(this.officeNumber);
        return this.officeNumber;
    }
    
    getRole(){
        //console.log("Role: Manager");
        return "Manager";
    }
}

module.exports=Manager;