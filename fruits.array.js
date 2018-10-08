// let fruit1=['Apple','banana','orange','mango','others' ]
let fruit=prompt(`Choose the Fruits below:
1.apple
2.banana
3.orange
4.mango
5.others...`)

    if(fruit=="apple" || fruit==1){
        let frcount=+prompt("No.of apple:");
        let price=(frcount*20)
        console.log("No. of apples="+price);
        }
    else if(fruit=="banana"|| fruit==2){
        let frcount=+prompt("No.of banana:");
        let price=(frcount*5)
        console.log("No. of banana="+price);
        
    }
    else if(fruit=="orange"|| fruit==3){
        let frcount=+prompt("No.of orange:");
        let price=(frcount*15)
        console.log("No. of orange="+price);
        
    }else if(fruit=="mango"|| fruit==4){
        let frcount=+prompt("No.of mango:");
        let price=(frcount*8)
        console.log("No. of mango="+price);
        }
    else {
        let frcount=+prompt("No.of fruits:");
        let price=(frcount*5)
        console.log("No. of fruits="+price);
        
}

