var arr1=[10,3,5,77,2,9]
var arr2=[10,44,22]
console.log(arr1);
console.log(arr2);
var flag=0
var common=[]
for(let i of arr1){
    for(let j of arr2){
        if(i==j){
            flag=1
            common.push(i)
            break
        }
       

    }
}
console.log(common)
if(flag==0){
    console.log("No common elements");
}