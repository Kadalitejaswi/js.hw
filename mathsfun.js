alert("I can Guess Your Birthday");
var number1=+prompt("Multiply your month with 5 and enter the value:");
var number2=+prompt("Add 17(enter 17 to add):");
var addition1= number1+number2;
alert("After adding 17 value is :" +addition1);
//console.log("After adding 17 value is :" +addition1);
var number3=+prompt("Double the value (enter the value after adding 17):");
var addition2=2*addition1;
alert("After doubling the value is :" +addition2);
//console.log("After doubling the value is :" +addition2);
var number3=+prompt("Sub 13 (enter 13 to subtract):");
var subtraction1=addition2-number3;
alert("After subraction the value is :" +subtraction1);
//console.log("After subraction the value is :" +subtraction1);
var number4=+prompt("multiply by 5 (enter 5 to multiply):");
var multiplication=subtraction1*number4;
alert("After multiplying with 5 the value is :" +multiplication);
//console.log("After multiplying with 5 the value is :" +multiplication);
var number5=+prompt("Sub 8 (enter 8 to subtract):");
var subtraction2=multiplication-number5;
alert("After subraction the value is :" +subtraction2);
//console.log("After subraction the value is :" +subtraction2);
var number6=+prompt("Double the value (enter the value after sub):");
var doubling=2*number6;
alert("After doubling the value is :" +doubling);
//console.log("After doubling the value is :" +doubling);
var number7=+prompt("Add 9(enter 9 to add):");
var addition2= doubling+number7;
alert("After adding 9 value is :" +addition2);
//console.log("After adding 9 value is :" +addition2);
var number8=+prompt("Add the number of the day you were born:");
var addition3= addition2+number8;
alert("After adding the day you born is :" +addition3);
//console.log("After adding the day you born is :" +addition3);
var number9=+prompt("Sub 203 (enter 203 to subtract):");
var subtraction3=addition3-number9;
//alert("The last 2digits are your born date and remaining is your month:" +subtraction3);
console.log("The last 2digits are your born date and remaining is your month:" +subtraction3);

