var arr=[1,2,3,4,5]
var num=5
/* for(let i=0;i<=arr.length;i++){
    for(let j=i+1;j<=arr.length;j++){
        if(arr[i]+arr[j]==num){
            console.log(arr[i]+" + "+arr[j]+" = "+num)
        }
    }
} */

for(let i of arr){
    for(let j of arr){
        if(i+j==num){
            console.log(i+" + "+j+" = "+num)
            break;
        }
    }
}

//arr=[3,2,4,1]    ,var num=6
  //1.sort
  //   1,2,3,4
  //   0,1,2,3
//     l     u   
//   arr[l]+arr[u]==6 1+4==5

//  arr =[12,3,4,5]  //3,4,5,12
//  arr2=[12,3,6,8]  //3,6,8,12
//print commont elemnts of array