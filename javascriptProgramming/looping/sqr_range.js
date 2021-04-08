var num=2
var lowerlimit=8, upperlimit=26
for(let i=lowerlimit;i<=upperlimit;i++){
    res=num**2;
    if((res>=lowerlimit)&&(res<=upperlimit)){
        console.log(num);
    }
    num++;
}