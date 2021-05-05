class Bank{
  static getAccountDetails() {
    var users = {
      1000: { acno: 1000, actype: "savings", username: "userone", password: "userone", balance: 50000 },
      1001: { acno: 1001, actype: "savings", username: "usertwo", password: "usertwo", balance: 5000 },
      1002: { acno: 1002, actype: "current", username: "userthree", password: "userthree", balance: 10000 },
      1003: { acno: 1003, actype: "current", username: "userfour", password: "userfour", balance: 6000 }
    };
    return users;
  }
  static authenticate(acno,username,password){
    let users=Bank.getAccountDetails();
    
    if (acno in users) {
      var uname = users[acno]["username"];
      var pwd = users[acno]["password"];

      if (username == uname && password == pwd) {
        return 1; // authentication success
      }
      else{
        return 0; //invalid username or password
      }
    }
    else{
      return -1; //invalid account number
    }
  }
  static login() {
  
    var acno = document.querySelector("#acno").value;
    var password = document.querySelector("#password").value;
    var username = document.querySelector("#username").value;
    let user=Bank.authenticate(acno,username,password);
    if(user==1){
       window.location.href="userhome.html";
      }
      else if(user==0){
        alert("Invalid username or password");
      }
    else {
      alert("Invalid account number");
    }

  }

  static checkBalance() {
    var acno = document.querySelector("#acno").value;
    var password = document.querySelector("#password").value;
    var username = document.querySelector("#username").value;
    let user=Bank.authenticate(acno,password,username)
    let users=Bank.getAccountDetails();
    document.getElementById("balance").style.display="block";
    
    if(user==1){
    var bal = users[acno]["balance"];
    document.getElementById("balance").innerHTML = `<p>Available bal: ${bal}</p>`;
    }
  }

   static withdraw(){
     var acno = document.querySelector("#account").value;
     var amt=document.querySelector("#amount").value
     //console.log(acno)
     //var  acno=1000;
      let users=Bank.getAccountDetails()
      // console.log(users[acno]["balance"]);
      if (acno in users) {
      var bal=users[acno]["balance"];
     
      if(amt<bal){
        bal-=amt;
         document.getElementById("msg").innerHTML=`You account has been withdrawn with amount ${amt}, available bal: ${bal}`;
         users[acno]["balance"]=bal;
        
       // console.log(`You account has been withdrawn with amount ${amt}, available bal: ${bal}`);
      }
      else{
       document.getElementById("msg").innerHTML=`You account balance is low`;
      // console.log("error")
      }
      } 
    } 

    static deposit(){
      var acno = document.querySelector("#account").value;
       //var acno=1000
      var amt=document.querySelector("#amount_dep").value;
     
        let users=Bank.getAccountDetails()
        if(acno in users){
          var bal=users[acno]["balance"];
          bal+=parseInt(amt);
         document.getElementById("msg_dep").innerHTML=`You account has been deposited  with amount ${amt}, available bal: ${bal}`;
         //console.log(`You account has been deposited  with amount ${amt}, available bal: ${bal}`);
          users[acno]["balance"]=bal;
        }
  
      } 
  
}


