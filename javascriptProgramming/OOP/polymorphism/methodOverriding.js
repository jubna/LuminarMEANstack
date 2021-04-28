

class Parent{
    phone(){
        console.log("Parent phone:note 10");
    }
}

class Child extends Parent{
    phone(){
        //super.phone()   => calls parent phone function also
        console.log("child phone:iphone");
    }
}

var ch=new Child()
ch.phone()

//method overriding=> same method name resolution but diff class