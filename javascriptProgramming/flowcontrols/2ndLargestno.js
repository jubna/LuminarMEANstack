var num1=40,num2=45,num3=40
if((num1>num2)&&(num1>num3)){
    if(num2>num3){
        console.log("2nd largest no "+num2);
    }
    else{
        console.log("2nd largest no "+num3);
    }
}
else if((num2>num1)&(num2>num3)){
    if(num1>num3){
        console.log("2nd largest no "+num1);
    }
    else{
        console.log("2nd largest no "+num2);
    }
}
else if((num3>num1)&(num3>num2)){
    if(num1>num2){
        console.log("2nd largest no "+num1);
    }
    else{
        console.log("2nd largest no "+num2);
    }
}
