//objects are key,value pair
var employee={
    id:1000,
    name:"ajay",
    salary:25000,
    exp:2,
    location:"kakkanad"
}

console.log(employee);
//objects are called by their key
console.log(employee.id);
//checking whwther a key is present in a object
 console.log("gender" in employee);
 //adding a new key value pair
 employee.grade="male"
 console.log(employee);
 //updating old value 
 employee.salary+=5000
 console.log(employee);