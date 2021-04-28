var clk = document.querySelector("#clk")
clk.addEventListener("click",()=>{
    clk.innerHTML="clicked";
    clk.style.color="red";
})
//event,functionality

var dbclk=document.querySelector("#dbclk")
dbclk.addEventListener("dblclick",()=>{
    dbclk.innerHTML="doubleclicked";
    dbclk.style.color="green";
})

var over=document.querySelector("#over");
over.addEventListener("mouseover",()=>{
    over.style.color="yellow"
}
)

over.addEventListener("mouseout",()=>{
    over.style.color="red"
}
)