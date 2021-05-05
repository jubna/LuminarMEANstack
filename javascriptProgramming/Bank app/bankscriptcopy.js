var users={
    1000:{acno:1000,actype:"savings",username:"userone",password:"userone",balance:50000},
    1001:{acno:1001,actype:"savings",username:"usertwo",password:"usertwo",balance:5000},
    1002:{acno:1002,actype:"current",username:"userthree",password:"userthree",balance:10000},
    1003:{acno:1003,actype:"current",username:"userfour",password:"userfour",balance:6000}
}
var acno=1000;
var username="userone";
var password="userone";

function login(){

    if(acno in users){
        var uname=users[acno]["username"];
        var pwd=users[acno]["password"];

        if(username==uname&& password==pwd){
          console.log("login success");
          checkBalance();
        }
        else{
            console.log("login failed");
        }
    }
    else{
        console.log("invalid user");
    }
  
}
login()
function checkBalance(){
    var bal=users[acno]["balance"];
    console.log(bal)
    
}

function withdraw(amount){
    if(amount<this.bal){
        this.bal-=amount;
        console.log(`You account no ${this.acno} in ${this.bank} has been withdrawn with amount ${amount}, available bal: ${this.bal}`);
    }
    else{
        console.log("Transaction Error");
    }
}
withdraw(1000);


static deposit(){
    var acno = document.querySelector("#acno").value;
     //var acno=1000
    var amt=document.querySelector("#amount_dep").value;
    //var amt=1000
      let users=Bank.getAccountDetails()
      if(acno in users){
        var bal=users[acno]["balance"];
        bal+=amt;
        document.getElementById("msg_dep").innerHTML=`You account has been deposited  with amount ${amt}, available bal: ${bal}`;
       // console.log(`You account has been deposited  with amount ${amt}, available bal: ${bal}`);
        users[acno]["balance"]=bal;
      }

    } 

    <div class="tab-pane fade" id="deposit" role="tabpanel" aria-labelledby="deposit-tab">
  <div class="row">
    <div class="col-12 m-3">
      <h3>Deposit money</h3>
   </div>
   <div class="col-12 col-sm-9">
    <form>
      <div class="form-group row">
        <label for="account" class="col-md-1 form-label">Account NO</label>
        <div class="col-md-7">
        <input type="text" class="form-control" id="acno">
        </div>
      </div> 
        <div class="form-group row">
            <label for="amount_dep" class="col-md-1 col-form-label">Amount:</label>
            <div class="col-md-7">
            <input type="text" class="form-control" id="amount_dep" placeholder="Enter money to deposit" name="amount">
            </div>
              <button type="button" class="btn btn-success col-3" id="deposit" onclick="Bank.deposit()">Submit</button>
            
        </div>
        </form>
        </div>
        <div class="row">
        <div class="col-12 col-sm-4 m-3">
          <div id="msg_dep"></div>
          </div>
          </div>
  </div> 
</div> 
</div>
</div>