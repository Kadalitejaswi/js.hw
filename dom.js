var  i=0;
var ul=document.createElement("ul")
function addList(){
var li=document.createElement("li")
li.innerText="item"+(i)
ul.appendChild(li)
document.body.appendChild(ul)
i++
}