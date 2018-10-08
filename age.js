alert("To know Retirement age enter your birth year ")
var birth=+prompt("Enter your Birth Year...")

let currentage=+Number(60)-(+Number(2018)-birth)
let retirementyear=2018+currentage


let Retirement=(birth,currentage,retirementyear)=>{  
    if(birth<2018){  
    this.birth=birth;
    this.currentage=currentage;
    this.retirementyear=retirementyear;
 
     return Retirement.birth,Retirement.currentage,Retirement.retirementyear;

}else{
    return alert("not born");
}


}

console.log("Retirement Year :"+ (retirementyear));


