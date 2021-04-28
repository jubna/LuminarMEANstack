class Parent{
    m1(){
        console.log("parent");
    }
}
class Child1 extends Parent{
    m2(){
        console.log("child 1");
    }
}
class Child2 extends Child1{
    m3(){
        console.log("child2");
    }
}

var ch2=new Child2()
ch2.m3()
ch2.m2()
ch2.m1()

var ch1=new Child1()
ch1.m2()
ch1.m1()
//ch1.m3()  // cant't acces, only in one direction inheritance

var ch=new Parent()
ch.m1()

//class Child2 extends Child1 extends Parent  => multilevel is not suppoerting in js