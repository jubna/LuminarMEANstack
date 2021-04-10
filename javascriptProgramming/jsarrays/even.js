var arr=[10,11,12,13,14,15,16]
var even=[] ,odd=[]
for(let num in arr){
    if(arr[num]%2==0){
        even.push(arr[num])
    }
    else{
        odd.push(arr[num])
    }
}

console.log(even)
console.log(odd)


/* 
arr[2,3,4,5]
 num=7
 [3,4]
 */