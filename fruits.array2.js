alert("Fruits Shop")
let fs=["Fruit","Count","Price","Total"]
let fruit=prompt(`Which fruit do you want
1.Apple
2.Orange
3.Mango
4.Banana
5.Others`)
if(fruit==='1'==='apple'||
    fruit===2||fruit==='orange'||
    fruit===3||fruit==='mango'||
    fruit===4||fruit==='banana'||fruit===5){

        

  switch(fruit){
      case '1' : case 'apple':
      alert("You selected :"+fruit)
      var fruits=fruit
      var count=prompt("How many "+fruit+" do you want")    
      var total=15*count
      fs.fruit=fruits
      fs.count=count
      fs.price=15
      fs.total=total

    console.log(fs)
 
    

  }

}else{

}
