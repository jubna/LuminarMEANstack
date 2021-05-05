function displayBox(num){
    var input=document.querySelector("#input");
    input.value+=num;
}

function clr(){
    // var input=document.querySelector("#input");
    input.value=" ";
}

function evaluateExpressin(){
    var res=input.value;
    var op=eval(res);
    input.value=op;
}

function cancelElement(){   
    input.value=input.value.slice(0,-1);
}