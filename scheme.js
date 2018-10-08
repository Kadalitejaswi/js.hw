alert("Welcome to our new Scheme");
alert(`If you deposit money from 
1.rs.10000 to rs.20000 the amount will double
2.rs.20000 to rs.50000 the amount will be 10times
3.morethan rs.50000 the amount will be 20times`)

let y=+prompt("Enter the amount:" );
if(y>10000 && y<=20000){
    alert(`You chose first scheme 
    The amount will be doubled to your deposited money.
    `)
    alert(`The amount after 1year will be: rs.`+(2*y))
    alert("Thank for using...! ")
}
else if(y>20000 && y<=50000){
    alert(`You chose second scheme 
    The amount will be 10times to your deposited money.
    `)
    alert(`The amount after 1year will be: rs.`+(10*y))
    alert("Thank for using...! ")
}
else if(y>50000){
    alert(`You chose third scheme 
    The amount will be 20times to your deposited money.
    `)
    alert(`The amount after 1year will be: rs.`+(20*y))
    alert("Thank for using...! ")
}
else{
    alert(`Minimum rs.10000 required.`)
}
