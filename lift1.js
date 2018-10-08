alert('welcome...!');
let liftnumber=+prompt('Enter floor number');
if(liftnumber<0){
    alert("lift moving up")
}
else if(liftnumber>0){
    alert("lift moving down")
}
alert(`Doors opening
Welcome to floor:`+liftnumber)

   for (i=0;i<5;i++){
       let floor=+prompt('Enter floor number')
       if(floor>liftnumber){
           alert("Lift moving up")
           alert(`Doors opening
Welcome to floor:`+floor)
       }
       else if(floor<liftnumber){
        alert("Lift moving down")
        alert(`Doors opening
Welcome to floor:`+floor)
   } else{
    alert("Same floor")
   }
   liftnumber=floor
}