
var eleth=document.createElement("th")
 var eleth2=document.createElement("th")
 var eleth3=document.createElement("th")


function addList(){
 var table=document.createElement("table")
eleth.innerText='name'
eleth2.innerText='Age'
eleth3.innerText='City'

    
var eletr4=document.createElement("tr")
var eletr5=document.createElement("tr")
var eletr6=document.createElement("tr")

 eletr4.innerText=prompt("Enter Your Name")
 eletr5.innerText=prompt("Enter Your Age")
 eletr6.innerText=prompt("Enter Your City")

table.appendChild(eleth)
table.appendChild(eleth2)
table.appendChild(eleth3)
table.appendChild(eletr4)
table.appendChild(eletr6)
table.appendChild(eletr5)


document.body.appendChild(table)
var th=document.querySelector(".sectid th")
console.log(th);

}

// var th=document.querySelector("fieldset th ")
// console.log(th);

// var eletr=document.createElement("tr")