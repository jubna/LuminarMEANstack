var employes=[
    [1000,"ram","developer",2,25000],
    [1000,"ravi","developer",2,22000],
    [1000,"raju","qa",2,29000],
    [1000,"nikhil","marketing",2,25000]
]

/* console.log(employes[0]);
console.log(employes[0][1]);

for(let employee of employes){
    console.log("Names: "+employee[1]);
} */

//print employee names whose salary greater than 22000
for(let employee of employes){
    if(employee[4]>22000)
    console.log("Names: "+employee[1]);
}
//count of develpers
var count=0
for(let employee of employes){
    if(employee[2]=="developer"){
        count++;
}
}
console.log("No of developers "+count);