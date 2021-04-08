var upperlimit=50
var lowerlimit=10

for(num=lowerlimit+1;num<=upperlimit;num++){    
    var flag=0 
    for(i=2;i<=num/2;i++){     
        if(num%i==0){      
            flag=1;
            break;
        }
    }
    if(flag==0){
        console.log(num)   
    }
}