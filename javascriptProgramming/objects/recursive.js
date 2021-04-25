var text="ABABAC"
var result={}
for(let ch of text){
    if(ch in result){
        console.log(ch +" is the 1st  recursive");
        break
    }
    else{
        result[ch]=1
    }
}
