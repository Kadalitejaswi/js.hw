count=0;
do{
    count++;
    let open=prompt("Welcome...! Entry the floor no.");
    if(open==0){
        if(open>0){ 
            alert("Lift is moving up");
            // alert("Welcome to Ground floor")
        }
            else{
        alert("Lift is moving down")
        alert("Welcome to Ground floor")

            }
  
    }
    else if(open==1){
        if(open>1){ 
            alert("Lift is moving up");
            alert("Welcome to First floor")
        
        }
            else{
        alert("you are in current floor")
        alert("Welcome to First floor")
            }
  
      }
    else if(open==2){
        if(open>2){ 
            alert("Lift is moving up");
            alert("Welcome to Second floor")
            open++
        }
            else{
        alert("Lift is moving down")
        alert("Welcome to Second floor")
            }
        
  
      }
    else if(open==3){
        if(open>3){ 
            alert("Lift is moving up");
            alert("Welcome to Third floor")
        }
            else{
        alert("Lift is moving down")
        alert("Welcome to Third floor")
            }
        
       
  
      }
    else if(open==4){
        if(open>4){ 
            alert("Lift is moving up");
            alert("Welcome to Fourth floor")
        }
            else{
        alert("Lift is moving down")
        alert("Welcome to Fourth floor")
            }
        
       
  
      }
    else if(open==5){
        if(open==5){

        
        alert("Welcome to Fifth floor")}
    
        else{
    alert("Lift is moving down")
    alert("Welcome to Fifth floor")
        }
    }
        else if(open>5){
           
            alert("Invalid")
        } 
  
      }

  while(count<5){
    
alert("Door got blocked")
console.log("Door got blocked");

}