function createTodo(){
    let num=document.querySelector("#num").value;
    let name=document.querySelector("#name").value;
    let task=document.querySelector("#task").value;
    let status=document.querySelector("#status").value;

    let todo={
        slno:num,
        uname:name,
        task:task,
        status:status
    }

    localStorage.setItem(num,JSON.stringify(todo))
    alert("created todo")
    // let object=JSON.parse(localStorage.getItem(num))
    // return object;
}

function displayTodos(){
    let len=localStorage.length;
    let html_data=``;
  
    for(let i=0;i<len;i++){
        let todo=JSON.parse(localStorage.getItem(localStorage.key(i)));
    
    html_data+=`<div class="card"  style="width: 18rem;">
     <div class="card-body">
         <h5 class="card-title">${todo.task}</h5>
       <h6 class="card-subtitle mb-2 text-muted">${todo.status}</h6>
       <p class="card-text">${todo.uname}</p>
       <p class="card-text">${todo.slno}</p>
       <button type="button"  onclick="localStorage.removeItem((${todo.slno})); dlt_task(this);">Delete</button>
         </div>
       </div>` 
    }
   
       document.getElementById("resultarea").innerHTML=html_data;
      
}

 function dlt_task(btn){
     
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  
 }