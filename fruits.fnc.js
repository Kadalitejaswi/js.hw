var user=new Object();
var store=new Array();


var fruits=function(){
    const count=prompt("No of fruits : ")
    var price=("Price of each fruit is:")
    price=20;
    var total=(price*count)
    user={}
    user.fruit=fruit; 
    user.price=price;
    user.count=count;
    user.total=total;
    store.push(user)
    console.log(user);
}

var apple=function(){
    alert('You selected apple')
    fruits();
}
var orange=function(){
    alert('You selected orange')
    fruits();
}
var mango=function(){
    alert('You selected apple')
    fruits();
}
var banana=function(){
    alert('You selected apple')
    price=8;
    fruits();
}
var others=function(){

}
while(true){

var fruit=prompt(`Select any fruit..!
1.Apple
2.Orange
3.Mango
4.Banana
5.Others....`);

if(fruit=='1'|| fruit== 'apple' ||fruit=='2'||fruit=='3'||fruit=='4'){
    switch(fruit){
     case '1':
     apple();
     break;
     
     case '2':
     orange();
     break;
     case '3':
     mango();
     break;
     case '4':
     banana();

     break;
     
        default:
    others();
        break;
    }
    }
    else {
        break;
    }}