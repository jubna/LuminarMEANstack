/* var age = 26
var name1 = "jubna"

console.log("Hai im "+ name1 +" "+age +" years old")
 var company="luminar"
 var location="kakkanad"

 console.log(`our company ${company} located in ${location}`); */
//using temp
 var num1=1
 var num2=2
 var temp
 console.log(`number before swapping ${num1} ${num2}`);
 temp=num1
 num1=num2
 num2=temp
 console.log(`number after swapping ${num1} and ${num2}`);
 //using without temp
var num3=15
var num4=25
console.log(`number before swapping  ${num3} ${num4}`);
num3=num3+num4; //num3=15+25=40
num4=num3-num4; //num4=40-25=15
num3=num3-num4;// num3=40-15=25
console.log(`number after swapping  ${num3} ${num4}`);