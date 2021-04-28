class Bank{
    constructor(acno,minbal,actype){
        this.acno=acno;
        this.bank="Sbi";
        this.bal=minbal;
        this.actype=actype;
        this.ifsc="sbi898920"
    }
    deposit(amount){
        this.bal+=amount;
        console.log(`You account no ${this.acno} in ${this.bank} has been credited with amount ${amount}, available bal: ${this.bal} `);
    }
    withdraw(amount){
        if(amount<this.bal){
            this.bal-=amount;
            console.log(`You account no ${this.acno} in ${this.bank} has been withdrawn with amount ${amount}, available bal: ${this.bal}`);
        }
        else{
            console.log("Transaction Error");
        }
    }
    checkBal(){
        console.log(`Your aval bal: ${this.bal}`);
    }
}
var obj1=new Bank(100,5000,'savings')
obj1.deposit(10000);
obj1.withdraw(3000);
var obj2=new Bank(101,15000,'savings')
var obj3=new Bank(102,7000,'current')
var obj4=new Bank(103,9000,'current')
//print actype=savings act
var users=[]
users.push(obj1,obj2,obj3,obj4)
/* var savingUsers= users.filter(emp=>emp.actype=='savings')
console.log(savingUsers); */
//sort according their bal
var sortBal = users.sort((i,j)=>i.bal-j.bal);
console.log(sortBal);
//print highest bal user
var highBalUser=users.reduce((user1,user2)=>user1.bal>user2.bal?user1:user2)
console.log(highBalUser);