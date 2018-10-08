var records=new Array()

var balance;
var user ={
    name:null,
    balance:null,
    address: null,
    email : null,
}

alert('welcome to My Bank')
while(true){
let options=prompt(`Select one option!
1.Balance
2.withdrawl
3.Deposit
4.Exit`);

if(options==='1'|| options==='balance'||options==='2' || options==='withdrawl'||
 options==='3'||options==='deposit'||options==="4"){
switch(options){
    case '1': case 'balance':
    console.log("You selected Balance");
    var cash 
    var deposit
    var balance=5000
    user.balance=balance;
   
    alert('Your balance is:'+balance)
    records.push(user)
    console.log(user);
    break;

    
    case '2': case 'withdrawl':
    var bal=+prompt("Enter the withdrawl amount")
  
     if(bal<balance){
         var cash=Number(balance)-Number(bal);
        
         balance=cash;
         user.balance=cash
         user.withdrawl=bal
         alert('Available balance is :'+Number(cash));
        
         records.splice(0,0,cash)
         records.splice(1,0,bal)
                   
         records.push(user)
         console.log(user);
       
    }else{
        alert('Insufficient Balance')
     }

    break;
    case '3': case 'deposit':
    var deposit=+prompt("Enter the deposit amount")
       
         var bal2=+Number(balance)+Number(deposit);
         balance=bal2
         user.balance=+bal2
         user.deposit=deposit;
         
         alert('Available balance is :'+bal2);
         records.splice(0,0,bal2)
         records.splice(1,0,deposit)
                   
         records.push(user)
         console.log(user);
         
         
         break;

           case '4':
         alert("exiting")
         console.log("exit");
         break;
     
     
         default:
         console.log("invalid option");
            
        
}}
else{
    console.log("invalid option");
    break;
}}