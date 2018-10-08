let promiseGift=new Promise(function(resolve,reject){
    let pass= true;
    if(pass){
        var sscExam={
            status:'SSC pass',
            message:"Cycle as gift",
        }
        resolve(sscExam)
    }else{
        reject("No gift")
    }
});
promiseGift.then(function(sscExam){
console.log(sscExam);
return sscExam;

}).then(function(interGift) 
{ var result1=` Inter pass : ${interGift.status} bike as gift`
console.log(result1);
return result;

    
}).then(function(enggGift){
    var result2=`enggGift  :${enggGift.status}job as gift`
console.log(result2);
   
}).then(function(jobGift){
    var result=`jobGift  : ${jobGift.status} car as gift`
console.log(result);
   
}).then(function(carGift){
    var result=`car gift :${carGift.status} marriage as gift`
console.log(result);

}).catch(function(reject){
    console.log(reject);
    
})