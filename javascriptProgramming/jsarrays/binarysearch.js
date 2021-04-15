var arr=[10,8,11,7,12,6]
var element=11
var cnt=0
//1.sorting of array
arr.sort((i,j)=>i-j)    //j-i => descending .  i-j =>ascending
console.log(arr);

//i-j means
//if(i<j){
//    return -1; // i come first , else return 1; // j comes first
//}
var flag=0
var low=0, upp=arr.length-1
while(low<=upp){
        var mid=Math.floor((low+upp)/2)
        if(element>arr[mid]){
            low=mid+1
        }
        else if(element<arr[mid]){
            upp=mid-1
        }
        else if(element==arr[mid]){
           
            flag=1
            break;
        }
        
}
if(flag==1){
    console.log("element found ")
}
else{
    console.log("not found")
}