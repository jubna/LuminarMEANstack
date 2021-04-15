var arr=[1,2,3,4,5]
var num=4,flag=0
var cnt=0
for(let i of arr){
    cnt++
    if(i==num){
        console.log("element found at",+cnt);
        flag=1
        break
    }
}
/* if(flag==1){
    console.log("element found at");
} */
if(flag==0){
    console.log("not found");
}