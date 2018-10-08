alert('Welcome to "My Bank"' );
let option1=5000;
let option3
let option=prompt(`Choose Your Options:
1.balance
2.withdrawl
3.deposit`);

if(option=="balance" || option==1 ){

        alert("Account Balance:"+option1)  
        alert("Thank for using...! ") 
        }

else if(option=="withdrawl" || option==2){
    let option4=prompt(`You chose withdrawl
    


 Enter the amount:`);
    if(4500>Number(option4)){
        let option5=option1-option4; 
        alert(`Your Account Balance:`+option5);
        alert("Thank for using...! ")}
       
            else if(Number(option4)>4500 && Number(option4)<=5000){
                // let option5=Number(option1)-Number(option4); 
                alert(`Minimum Balance Required...


                Account Balance:`+option1);
                alert("Thank for using...! ")}
            else if(Number(option4)>5000){
            
            alert(`You dont have Enough balance
            Account Balance:`+option1);
            alert("Thank for using...! ")}
    }
else if(option=="deposit" || option==3){
        let option2=prompt(`You Chose deposit
        
        
        Enter the amount:`);
        let option3=Number(option1)+Number(option2)
     alert("The balance after depositing:"+option3);
     alert("Thank for using...! ")
}

else{
    alert("wrong entry");
    
}