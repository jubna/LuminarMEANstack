var num=2
var lowerlimit=5, upperlimit=30 ,i=1
while(i<=upperlimit){
  let  res=i**num;    //1**2   2**2  3**2  4**2  5**2
    if((res>=lowerlimit)&&(res<=upperlimit)){
        console.log(i);
    }
   i++;    //2   3  9  16   25
}