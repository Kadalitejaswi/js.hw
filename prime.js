var a=prompt("Enter the number")
var b=0;
  for(let i=0;i<=a;i++){
    if (a % i == 0) {
        b = b+1;;
  }}
   if(b==2){
           alert("Your number is  a prime number");

        }
        else
        {
            alert("Your number is not a prime number");
        }
