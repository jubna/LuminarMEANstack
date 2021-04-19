/* var arr1=[10,3,5,77,2,9]
var arr2=[10,44,22] */
var arr1=["jubna","rassal","shahan"]
var arr2=["shahan"]
console.log("Array 1: "+arr1);
console.log("Array 2: "+arr2);
console.log("Common Elements: ");
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