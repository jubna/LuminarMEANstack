var text="hello hai hello hai good"
//hello:2, hai:2, good:1
//1.split by spaces
var words=text.split(" ")  //words=["hello"."hai","hello","hai","good"]
//2.create empty object
var result={}

for(let word of words){ // word=hello
     //check whether hello is in result or not
    if(word in result){  
       
        result[word]+=1  //update
    }
    else{
        result[word]=1  //create new key,value 
    }
}
console.log(result);
//result
//    k       v
//1. hello    1
//2. hai      1
//3. hello    1+1=2