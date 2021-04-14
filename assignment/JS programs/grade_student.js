function student_marks(){

var read = require('readline-sync')
var sub1=parseFloat(read.question('enter marks of the student'))
var sub2=parseFloat(read.question())
var sub3=parseFloat(read.question())

var marks=[sub1,sub2,sub3]
var total_marks=0

for(let num in marks){
    total_marks+=marks[num];
    avg=parseFloat(total_marks/3);
}


console.log(total_marks +" Total Marks")
console.log(avg +" avg")
var grade=0;
if(avg>=90){
    console.log("S grade")
}
else if(avg>=80){
    console.log("A grade");
}
else if(avg>=70){
    console.log("B grade");
}
else if(avg>=60){
    console.log("C grade")
}
else if(avg>=50){
    console.log("D grade")
}
else{
    console.log("Fail")
}
return grade;
}

console.log("Student 1")
var student1=student_marks();
console.log("Student 2")
var student2=student_marks()
console.log("Student 3")
var student3=student_marks()
console.log("Student 4")
var student4=student_marks()
console.log("Student 5")
var student5=student_marks()

