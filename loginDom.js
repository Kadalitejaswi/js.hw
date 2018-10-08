section=document.createElement("section"); 
var record=[];
var records=[];
var p;var input;
function para(){
p=document.createElement('p')
input=document.createElement('input')
}
function append(){
input.setAttribute("class",`name`)
    section.appendChild(p)
    section.appendChild(input)
}
function register(){
    para()
p.innerText=`Enter Your first Name:`
input.setAttribute("id",`fname`)

input.setAttribute("type",`string`)
    append();para()
p.innerText=`Enter Your Second Name:`
input.setAttribute("type",`string`)
    append() ;para()
p.innerText=`Enter Your Age:`
input.setAttribute("type",`string`)
     append();para()
p.innerText=`Enter Your Email:`
input.setAttribute("type",`email`)
    append();para()
p.innerText=`Enter Your password:`
input.setAttribute("type",`password`)
    append()
document.body.appendChild(section)
}

var user={}
function submit(){
var email1=document.getElementsByClassName('name')
for(i=0;i<email1.length;i++){
console.log(email1[i].value);
}
user.fname=email1[0].value
user.password=email1[4].value
user.email=email1[3].value
record.push(user)
console.log(record);
email1.value='Deault value'
section.outerHTML = null;
var h3=document.createElement ('h2')
if(user.fname===null|| user.fname===undefined ||user.fname.length>10){
      h3.innerText='cant be empty'
}else{
    h3.innerText='registration sucessfull !!!!'
}
   section.appendChild(h3)
   console.log(user.fname);
   
}
section1=document.createElement("section1"); 
function para1(){
    p=document.createElement('p')
    input=document.createElement('input')
    }
    function append1(){
    input.setAttribute("class",`name1`)
    section1.appendChild(p)
        section1.appendChild(input)
    }
function login(){
    para1()
p.innerText=`Enter Your Email id:`
input.setAttribute("type",`email`)

    append1()
    para1()

p.innerText=`Enter Your password:`
input.setAttribute("type",`password`)

    append1()
    document.body.appendChild(section1)
    
    console.log(user);
    
}
var user1={}
function submit1(){
    var email2=document.getElementsByClassName('name1')
    for(i=0;i<email2.length;i++){
    console.log(email2[i].value);
    }
    user1.password=email2[1].value
    user1.email=email2[0].value
    records.push(user1)
    console.log(records);
    email2.value='Deault value'
    section1.outerHTML = null;

    var h2=document.createElement ('h2')

  if(user.email===user1.email && user.password===user1.password){
      console.log("login sucessfull");
      h2.innerText='Login Successfull :) !!!'

    }else{
        console.log("LOgin Failed");
      h2.innerText='Login failed :( !!!'
        }
        document.body.appendChild(h2)
    }