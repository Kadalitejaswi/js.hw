var section=document.createElement('section')
var ply1=document.createElement('label')
var ply2=document.createElement('label')
var div=document.createElement('div')
    ply1.innerText='player-1'
    ply2.innerText='player-2'
var input1=document.createElement('input')
var input2=document.createElement('input')
var image=document.querySelector('img')
    
var turn=1;
var total=23;
var sum1=0,sum2=0;
var value

var h1=document.createElement('h1')

function diceRoll(){
    value=Math.floor(Math.random() * 6) + 1
    
    switch (value) {
        case 1:
        image.setAttribute('src','1.jpg')
         break; 
        case 2:
        image.setAttribute('src','dice 2.jpg')
          break;
        case 3:
        image.setAttribute('src','dice 3.jpg')
         break;    
        case 4:
        image.setAttribute('src','dice 4.jpg')
        break;
        case 5:
        image.setAttribute('src','dice 5.jpg')
          break;
        case 6:
        image.setAttribute('src','dice 6.jpg')
         break;                  
             default:
            break;
    }

    if(turn%2 !==0){ 
        if((sum1+value)<=total){
            sum1+=value;
            input1.value=sum1;
            console.log(input1.value);
            
            
            
        }
        if(sum1==23){
            h1.innerText='player-1 wins'
     }
    }
        else{
      if((sum2+value)<=total){
          sum2+=value;
          input2.value=sum2;
        
          
      }
      if(sum2==23){
          h1.innerText='player-2 wins'
      }
    }turn++ 
    
    document.body.appendChild(h1)

} 
    document.body.appendChild(div)
    div.appendChild(ply1)
    div.appendChild(input1)

    div.appendChild(ply2)
    div.appendChild(input2)
    section.appendChild(image)

    document.body.appendChild(section)

    // document.body.style.backgroundColor='lightblue'



    