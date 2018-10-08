var user =new Object();
var accounts =new Array();
for(;;){

var operations=prompt(`Welcome to money bank
1.To create account
2.Show balance
3.withdrawl
4.Deposit
5.Exit`)

if(operations=='1'||operations=='2'||operations=='3'||operations=='4'){
    switch(operations){
     case '1':
     openAccount();
     break;
     case '2':
     showBalance();
     break;
     case '3':
     withdrawAmmount();
     break;
     case '4':
     deposit();

     break;
     case '5':
     alert("Exiting")
     break;
        default:
        alert("Invalid option")
        break;
    }
    }
    else {
        break;
    }

}
function withdrawAmmount(){
    var accountNo=prompt("Enter account number");
    var access=findAccount(accountNo);
    
        if(access){
                var amount=prompt("Enter amount to withdraw");
                if((user.balance-amount)>500){
                user.balance-=(+amount);
                alert(`${user.name} has balance ${user.balance}`)
                console.log(`${user.name} has balance ${user.balance}`);
                }else{
                    alert('Minimum balance is required')
                } 
                }else{
                alert("Un authorized user..! ");
               } }
function deposit(){
    var accountNo=prompt("Enter account number");
    var access=findAccount(accountNo);
    var operation1=prompt(`1.Fixed Deposit
    2.To check the Fixed deposit balance
    3.Demand Deposit`)
    if(operation1=="1" || operation1=="2")
    switch(operation1){
      case "1":
      var interest=5
      var tenure=+prompt('enter period in terms of month')
      var amount2=prompt(`Hello,${user.name}...!
      Enter amount the Fixed deposit amount`);
      for(tenureperiod=0;tenureperiod<tenure;tenureperiod++)
      {
          var sp=(amount2*tenure*interest)/100
         user.fixedBalance =Number(sp)+Number(amount2)
      }
      alert(`${user.name} has fixed deposit balance ${user.fixedBalance}`)
      break;
      
      case "2":
         alert(`${user.name} has fixed deposit balance ${user.fixedBalance}`)

  break;
        case "3":
        if(access){
                var amount1=prompt(`Hello,${user.name}...!
                Enter amount the deposit amount`);
                if(Number(amount1)<50000){
                user.balance=+(user.balance)+Number(amount1);
                alert(`${user.name} has balance ${user.balance}`)
                console.log(`${user.name} has balance ${user.balance}`);
                }else{
                    alert('Cant deposit more than or equal to Rs.5000 at once')
                }}else{
                alert("Un authorized user..! ");
               } }
            }
function findAccount(accountNo){
    var count =0;
    for(account in accounts){
            if( accounts[account].accountNo == accountNo){
            console.log("Account found")
            console.log(accounts[count]);
            
                return accounts[count];
            }
            count++;
        }}
function showBalance(){
    var accountNo=prompt("Enter account number");
    var access=findAccount(accountNo);
    console.log('access:  ',access);
    
    if(access){
                console.log("Account found");
                console.log(`Hello ${access.name}..! 
                       You have acount balance ${access.balance}`);
               alert(`${access.name} has balance ${access.balance}`)
               }else{
               console.log("Account doesn't exists");
                }   }

function openAccount(){
    const accountNo=prompt("Enter your account number :");
    var accountname=prompt("Enter account name :");
    var email=prompt("Enter your Email id :");
    var mobile=prompt("Enter your Mobile Number")
    const accountbalance=prompt("Enter your opening account balance");
    user={}
    if(accountbalance>500){
    user.name=accountname;
    user.accountNo=accountNo;
    user.email=email;
    user.mobile=mobile;
    user.balance=accountbalance;
    accounts.push(user)
    alert("Account created successfully")
    console.log(user);
    
    }else{
        alert("oops...!Account is not created")
    }
}


