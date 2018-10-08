
    var exam={
        status:'pass',
        message:"Gifts are given",
    }

let examGifts=function(){
    return new Promise(function(resolve,reject){
        if(exam.status=='pass'){
    resolve(exam)
        }else{
            exam.status='ssc passfail',
            exam.message='cycle as gift'
            reject(exam)
        }
    })
}
let sscGift=function(exam){
    return new Promise(function(resolve,reject){
    if(exam.status=='pass'){
        exam.sscGift='cycle as gift';
        exam.sscExam=true
        
        resolve(exam);
    }else{
        exam.sscGift='No gift',
        exam.sscExam=false;
        reject(exam)
    }
})
}

let interGift=function(exam){
    return new Promise(function(resolve,reject){
    if(exam.status=='pass'){
        exam.interGift='Bike as gift';
        exam.interExam=true
        
        resolve(exam);
    }else{
        exam.interGift='No gift',
        exam.interExam=false;
        reject(exam)
    }
})
}


let enggGift=function(exam){
    return new Promise(function(resolve,reject){
    if(exam.status=='pass'){
        exam.enggGift='job as gift';
        exam.enggExam=true
        
        resolve(exam);
    }else{
        exam.enggGift='No gift',
        exam.enggExam=false;
        reject(exam)
    }
})
}

let jobGift=function(exam){
    return new Promise(function(resolve,reject){
    if(exam.status=='pass'){
        exam.jobGift='marriage as gift';
        exam.jobExam=false
        
        resolve(exam);
    }else{
        exam.jobGift='No gift',
        exam.jobExam=false;
        reject(exam)
    }
})
}

    
examGifts().then(function(result){
    console.log(result);
    return sscGift(result)
}).then(function(exam){
    console.log(exam);
    return  interGift(exam)
}).then(function(exam){
    console.log(exam);
    return enggGift(exam)
}).then(function(exam){
    console.log(exam);
    return jobGift(exam)
    
    

}).catch(function(resultFromReject){
    console.log(resultFromReject);
    
})