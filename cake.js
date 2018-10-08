
alert(`welcome to cake shop
strawberryCake
chocolateCake
butterscochCake
blackforestCake`)
var Name=prompt('Enter the cake name')
var count=prompt("How many"+Name+"do you want")
let strawberryCake=(price)=>{

    return price=count*200;
}
let chocolateCake=(price)=>{
    return price=count*500;
}
let butterscochCake=(price)=>{
    return price=count*800;
}
let blackforestCake=(price,)=>{
    return price=count*1200;
}

let cake=(cakeName,counts,callback)=>{
    if(typeof callback=='function'){
        
    return callback(cakeName,counts);
}else{
console.log('cake not found');

}

}
//cake(cakeName,count,price)
console.log(cake(Name,count));

