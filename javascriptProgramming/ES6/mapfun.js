//map function => used to take a specific object

var arr=[1,2,3,4,5,6]

var sqr=arr.map(num=>num**2)

console.log(sqr);

var cu= arr.map(num=>num**3)
console.log(cu);

var employees=[
    {eid:1000,ename:"ajay",salary:25000},
    {eid:1001,ename:"vjay",salary:26000},
    {eid:1002,ename:"ram",salary:24000},
    {eid:1003,ename:"ravi",salary:25000}

]

var ename=employees.map(emp=>emp["ename"].toUpperCase())
console.log(ename);

var salary=employees.map(emp=>emp["salary"]+=5000)
console.log(salary);
