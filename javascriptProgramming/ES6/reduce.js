var arr=[1,2,9,11,7,8]
//reduce can be used to find sum, or highest no or lowest no...
var sum= arr.reduce((num1,num2)=>num1+num2)
console.log(sum);

var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);
// sort  numbers if num1-num2=>asc , num2-num1=>desc
var sort=arr.sort((num1,num2)=>num1-num2)
console.log(sort);

var employees=[
    {eid:1000,ename:"ajay",salary:25000,desig:"developer"},
    {eid:1001,ename:"vjay",salary:26000,desig:"mrkt"},
    {eid:1002,ename:"ram",salary:24000,desig:"developer"},
    {eid:1003,ename:"ravi",salary:25000,desig:"developer"}

]

var emp= employees.reduce((emp1,emp2)=>emp1.salary>emp2.salary?emp1:emp2)
console.log(emp);

console.log(emp["ename"]+","+emp["salary"]);


var emp_low= employees.reduce((emp1,emp2)=>emp1.salary<emp2.salary?emp1:emp2)
console.log(emp_low);
var srtemp=employees.sort((emp1,emp2)=>emp1.salary-emp2.salary)
console.log(srtemp);