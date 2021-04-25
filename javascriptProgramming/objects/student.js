var student={
    rol:100,
    name:"vinu",
    course:"bca",
    total:150
}


/* console.log(student["name"]);
console.log("grade" in student);
student.grade="bplus"
console.log(student);
student.total+=50
console.log(student.total); */


for(let key in student){            // object =>in   array=>of
    console.log(key);
    // console.log(student[key]);
}