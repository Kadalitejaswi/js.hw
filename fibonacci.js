let number=+prompt("Enter the number");
let no1=0;
let no2=1;


console.log(no1);
console.log(no2);
for(i=3;i<=number;i++){
    let no=no1+no2;
        no1=no2;
        no2=no;
        console.log(no);
        
    
}