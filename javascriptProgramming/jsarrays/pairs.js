var arr=[3,4,2,1,5]
var num=5
arr.sort((i,j)=>i-j);
console.log(arr)
var low=0 , upp=arr.length-1
while(low<=upp){
    for( low of arr){
        for(upp of arr){
            if(low+upp==num){
                console.log(low+" + "+upp+" = "+num)
            }
            else{
                low++;
            }
        }
    }
}
