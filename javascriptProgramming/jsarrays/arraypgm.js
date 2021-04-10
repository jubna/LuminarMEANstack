//js arrays
//array is a collection pf same or diff type of objests reference byusing common name

var expense = [22000,25000,29000]

console.log(expense[0]) 
expense[0]=23000      //changing an elemnt through index
expense.push(28000)     //adding an element at end
expense.pop()          //removing an element at end
console.log(expense)

/* for(let i=0;i<expense.length;i++){
   console.log(expense[i]);
} */

 for (let num in expense){            //loop
    console.log(expense[num]);
 }


 let pos = 1
let n = 2
let removedItems = expense.splice(pos, n)    // this is how to remove items, n defines the number of items to be removed,
                                             // starting at the index position specified by pos and progressing toward the end of array.
console.log(expense)
console.log(removedItems)

// var expense1 = [jan:22000,feb:25000,mar:29000]        < ==  object
// console.log(expense1.jan)