//123  1*1*1+2*2*2+3*3*3
var num=num_temp=371
var res,sum=0

while(num_temp!=0){ //12 !=0   1!=0
    rem=num_temp%10; //3   2  1%10 
    rem=rem**3;  //3*3*3  2*2*2 1*1*1
    res=+rem  //27 + 8  +1
    num_temp= Math.floor(num_temp/10) //123/10=12  12/10=1
    sum=sum+res

}
console.log(sum)

if(sum==num){
    console.log("Armstrong no")
}
else{
    console.log("Not armstrong no")
}