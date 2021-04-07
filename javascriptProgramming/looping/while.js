//initialisation
//condition
//increment

/* 
var i=0;  //i=0
while(i<=10){    //0<=10 ,1<=10,2<10,3<=10,4<=10,5<=10,6<=10,7<=10,8<=10,9<=10,10<=10,11<=10
    console.log(i); // 0   1      2    3    4      5     6    7     8      9    10       not
    i++; // 0  1  2  3  4  5  6  7  8  9  10
}
 */

/* var i=10;   //i=10
while(i>=0){  // 10>=0,   9>=0  8>=0  7>=0  6>=0 5>=0  4>=0  3>=0 2>=0 1>=0 0>=0 -1>=0
    console.log(i); //10   9     8     7     6     5    4     3    2    1    0     not
    i--   //  9    8  7  6  5  4  3  2  1  0
} */

/* console.log("even no are ");
var limit=50;
var i=1;
while(i<=limit){
    if(i%2==0){
        console.log(i);
    }
    i++
} */

//sum of no from 1-100
/* 
var sum=0;
i=1;
while(i<=100){
    sum=sum+i;
    i++;
}
console.log("sum of no from 1 to 100 is "+sum)
 */
// factorial of a no
/* var fact=1;
var i=1;

num=3;
if(num==0){
    console.log("fact of 0 is 1");
}
else{
while(i<=num){   //1<=5     2<=5  3<=5  4<=5  5<=5
    fact=fact*i;   //f=1  f= 2     f=6  f=24  f=120
    i++;      //2  3  4  5
}
console.log("fact of " +num +" is "+fact);
} */

//reverse a no
/* var num=501;
var res=""

while(num!=0){   // 501!==0,  50!==0  5!==0  0==0
    let digit=num%10;  //501%10=1 ,  50%10=0  5%10
  console.log(digit); //1  0  5
  res=res+digit;  // 1 0  5
  num= Math.floor(num/10) // 501/10=50  50/10=5  5/10=0
}
console.log(res) */


//123  1*1*1+2*2*2+3*3*3
var num=501
var res,sum=0

while(num!=0){ //12 !=0   1!=0
    rem=num%10; //3   2  1%10 
    rem=rem**3;  //3*3*3  2*2*2 1*1*1
    res=+rem  //27 + 8  +1
    num= Math.floor(num/10) //123/10=12  12/10=1
    sum=sum+res
    
}
console.log(sum)
