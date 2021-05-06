
 function populate(book){

    let len=localStorage.length;
    
    for(let i=0;i<=len;i++){
        let book=JSON.parse(localStorage.getItem(localStorage.key(i)))
    
    }
    
    html_data=`<tr>
    <td>${book.bookname}</td>
    <td>${book.author}</td>
    <td>${book.price}</td>
    </tr>`;
       
    document.getElementById("result").innerHTML+=html_data;
    
    
    }
   /*  let html_data=`<tr>
    <td>${book.bookname}</td>
    <td>${book.author}</td>
    <td>${book.price}</td>
    </tr>`;
    document.getElementById("result").innerHTML=html_data; */


function createBook(){
    let bookname=document.querySelector("#bookname").value
    let author=document.querySelector("#author").value
    let amount=document.querySelector("#price").value
    let book={
        bookname:bookname,
        author:author,
        price:amount
    }
    localStorage.setItem(bookname,JSON.stringify(book))
    alert("succesfully created")

    let object=JSON.parse(localStorage.getItem(bookname))
    populate(object)
}



