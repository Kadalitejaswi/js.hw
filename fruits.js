alert(`Welcome....! 
Choose fruits You want`);
let fruit=prompt(`Availabe fruits are:
apple
mango
banana
`);
/*let apple
let mango
let banana
let applemango
let mangobanana
let applebanana
let applemangobanana*/
if(fruit=="apple"){
    console.log("You Chose:Apple");
    let frcount=+prompt("No.of fruits:");
    console.log("No. of apples="+frcount);
    }
else if(fruit=="mango"){
    console.log("You Chose:Mango");
    let frcount2=+prompt("No.of fruits:");
    console.log("No. of Mango="+frcount2);
}
else if(fruit=="banana"){
    console.log("You Chose:Banana");
    let frcount3=+prompt("No.of fruits:");
    console.log("No. of Banana="+frcount3);
}
else if(fruit=="apple+mango" && fruit=="mango+apple"){
    console.log("You Chose:Apple & Mango");
    let frcount4=+prompt("No.of Apples:");
    console.log("No. of apples="+frcount4);
    let frcount5=+prompt("No.of Mangoes:");
    console.log("No. of Mangoes="+frcount5);
}
else if(fruit=="apple+banana" && "banana+apple"){
    console.log("You Chose:Apple & Banana");
    let frcount6=+prompt("No.of Apples:");
    console.log("No. of apples="+frcount6);
    let frcount7=+prompt("No.of Banana:");
    console.log("No. of Bananas="+frcount7);
}
else if(fruit=="mango+banana" && "banana+mango"){
    console.log("You Chose:Banana & Mango");
    let frcount8=+prompt("No.of Banana:");
    console.log("No. of Bananas="+frcount8);
    let frcount9=+prompt("No.of Mangoes:");
    console.log("No. of Mangoes="+frcount9);
}
else if(fruit=="apple+mango+banana" && fruit=="mango+banana+apple" && fruit=="banana+mango+apple" && fruit=="apple+banana+mango" && fruit=="banana+apple+mango" && fruit=="mango+apple+banana"){
    console.log("You Chose:Apple,Mango & Banana");
    let frcount=+prompt("No.of Apples:");
    console.log("No. of apples="+frcount);
    let frcount1=+prompt("No.of Mangoes:");
    console.log("No. of Mangoes="+frcount1);
    let frcount2=+prompt("No.of Bananas:");
    console.log("No. of Bananas="+frcount2);
}
else {
    console.log("Oops..! You didnt Purchase anything");
    
}