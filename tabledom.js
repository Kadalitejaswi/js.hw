var th=document.createElement("th")
var th1=document.createElement("th")
var th2=document.createElement("th")
var table=document.createElement("table")
    th.innerHTML=`<th>name</th> `
    th1.innerHTML+='<th>age</th>'
    th2.innerHTML+=`<th>city</th>`
    table.appendChild(th)
    table.appendChild(th1)
    table.appendChild(th2)
var row =1;
function addRow(){
    table.style.width='300px'
    table.style.height='40px'
    table.style.border='1px solid black'
    table.style.borderCollapse="collapse"
    table.style.textAlign="center"
    



var tr=document.createElement("tr")
// tr.setAttribute('id','row'+row);

var td1=document.createElement("td")
var td2=document.createElement("td")
var td3=document.createElement("td")
td1.setAttribute("class",`item`)
td2.setAttribute("class",`item`)
td3.setAttribute("class",`item`)
td1.innerHTML=`<td>`+prompt("enter Name")+`</td>`
td2.innerHTML=`<td>`+prompt("enter age")+`</td>`
td3.innerHTML=`<td>`+prompt("enter city")+`</td>`

// td1.style.width='300px'
// td1.style.height='40px'
// td1.style.border='1px solid blue'
// td1.style.borderCollapse="collapse"
// td1.style.textAlign="center"

// td2.style.width='300px'
// td2.style.height='40px'
// td2.style.border='1px solid blue'
// td2.style.borderCollapse="collapse"
// td2.style.textAlign="center"

// td3.style.width='300px'
// td3.style.height='40px'
// td3.style.border='1px solid blue'
// td3.style.borderCollapse="collapse"
// td3.style.textAlign="center"


tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
console.log(tr);
table.appendChild(tr)
document.getElementsByClassName("item" ,"style.border='1px solid blue");
// tr.style.width='300px'
// tr.style.height='40px'
// tr.style.border='1px solid red'
// tr.style.borderCollapse="collapse"
// tr.style.textAlign="center"



document.body.appendChild(table)
    // row++;
    }

function replaceRow(){
        var tableRow = document.querySelector('row2');
        var item=document.querySelector(`.item`)
        var item1=document.querySelector(`.item1`)
        var item2=document.querySelector(`.item2`)

        
        item.innerText=prompt("Enter your item name:")
        item1.innerText=prompt("Enter your item age:")
        item2.innerText=prompt("Enter your item city:")
        tableRow.innerHTML = item;
        tableRow.innerHTML += item1;
        tableRow.innerHTML += item2;

    }
function removeRow(){
    // var position=prompt("Enter a item")
    var item=document.querySelector(``)
    ul.removeChild(item)
    }
function removeTable(){
    var ul=document.querySelector("ul")
    // ul.outerHTML=""      or
    document.body.removeChild(ul)

    
    }