alert("Enter number")

let rem, n=0, number;
let num=prompt("enter the number");
number=num;
while(num>0)
{
    rem=num%10;
    number=parseInt(num/10);
    n=n*10+rem;
}
if(n==number)
{
    console.log("number is palindrome");
    
}else{
    console.log("not a palindrome");
    
}
