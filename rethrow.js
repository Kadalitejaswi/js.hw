try{
var name=prompt("Enter your name")
try{
function data(){


if(name===null || name===undefined || name==="" ){
    var error={
     message:'cant be empty'
     }
     throw new ReferenceError("reference error")
    }else{
        console.log(name);
        
    }

}
data()
}catch(err){
   console.log("error ",err.name);
   
}
throw error
}

catch(error){
console.log("out side error:",error);

}