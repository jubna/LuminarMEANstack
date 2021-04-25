//filter=> for a specific condition

var arr=[1,2,3,4,5,6,7]

var even=arr.filter(num=>num%2==0)
console.log(even);



var employees=[
    {eid:1000,ename:"ajay",salary:25000,desig:"developer"},
    {eid:1001,ename:"vjay",salary:26000,desig:"mrkt"},
    {eid:1002,ename:"ram",salary:24000,desig:"developer"},
    {eid:1003,ename:"ravi",salary:25000,desig:"developer"}

]

var salary=employees.filter(emp=>emp["salary"]>25000)
console.log(salary);

var devop=employees.filter(emp=>emp["desig"]=="developer").map(obj=>obj.ename)
console.log(devop);