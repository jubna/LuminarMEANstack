//polymorphism => many form
//method overloading

class Calculation{
    add(){
        console.log("no arg method");
    }
    add(num1){
        console.log("single arg method");
    }
    add(num1,num2){
        console.log("two arg method");
    }
}
var ch=new Calculation()
ch.add(10,10)
ch.add(10)
ch.add()

//same method name distinguish by  diff no of  parameters  => not supporting in js
//in js execute only recently implemented method=> here add(num1,num2)