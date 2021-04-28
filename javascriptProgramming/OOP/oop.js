//oop
//class = design /plan/template/blue print   tv
//object=building/home   mytv = realworld entitiy
//ref                   remote

class Employee{
    // setEmployee(id,name,salary,desig)    initializing instance variables
    constructor(id,name,salary,desig){      //  initializing instance variables
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.desig=desig;
    }
    printEmployee(){
        console.log(`id= ${this.id} , name = ${this.name} , salary= ${this.salary} , desig = ${this.desig} `);
    }
}

var obj1=new Employee(100,"jubna",25000,"developer");
//obj1.setEmployee(100,"jubna",25000,"developer")
//log(obj1.name)  refname.objectvaraible
obj1.printEmployee()
