
var name=prompt("Enter your name : ")
var age=prompt("Enter your age : ")
var salary=prompt("Enter your salary : ")

try{
var validation=new Promise(function(resolve,reject){
    var user={}; var error={}
if(isEmpty(name) || isNull(name) || isundefined(name) ){
   var error={
    msg:'cant be empty'
    }
   
reject (error)
}else if(name.length<10){
  user.name=name;
  user.age=age;
  user.salary=salary;
  console.log(user);
  resolve(user)
}else{
    alert("count must be less than 10character")
    reject(user)
}
}
 );

    
}catch(error){
    console.log("error",error);

}
validation.then(function(user){
    console.log(user);
    
}).catch(function(error){
    console.log(error);
    
})


function isEmpty(name){
    return(name==="")?true:false;
}
function isNull(name){
    return(name===null)?true:false;
}
function isundefined(name){
    return(name===undefined)?true:false;
}
