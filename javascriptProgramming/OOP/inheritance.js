class Parent{         //parent , base, super
    phone(){
        console.log("samsung A50");
    }

}


class Child extends Parent{     //child , derived, sub    single level inheritance

}

var ch=new Child();
ch.phone()

//inheritance?  => derived class extend property from base class
