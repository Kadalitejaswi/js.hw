function diceRoll(){
return (Math.floor(Math.random() * 6) + 1)
}
var img=document.querySelector('img')
function dice(callback){
    var data=callback()
    console.log(data);
  
switch (data) {
    case 1:
         img.setAttribute('src','1.jpg')
     break; 
    case 2:
         img.setAttribute('src','dice 2.jpg')
      break;
    case 3:
          img.setAttribute('src','dice 3.jpg')
     break;    
    case 4:
         img.setAttribute('src','dice 4.jpg')
    break;
    case 5:
         img.setAttribute('src','dice 5.jpg')
      break;
    case 6:
         img.setAttribute('src','dice 6.jpg')
     break;                  

    default:
        break;
}

}