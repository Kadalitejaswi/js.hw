let user=['fruit','price','count','total']
alert('welcome to Fruits Shop')
for(i=0;i<5;i++){
let options=prompt(`Select any fruit..!
1.Apple
2.Orange
3.Mango
4.Banana
5.Others....`);
let apple
let orange
let mango
let banana


console.log("you selected "+options);
var fruit=options
var count=prompt('How many do you want?') 

if(options==apple || options==1){
var total=20*count;
user[0]="Fruit :"+"Apple";
user[1]="Price of each :"+20;
user[3]="No. of fruits :"+count;
user[4]="Total :"+total;
console.log(user);
alert('You purchased '+total)
}else if(options==orange ||options==2){
var total=15*count;
user[0]="Fruit :"+"Orange";
user[1]="Price of each :"+15;
user[2]="No. of fruits  :"+count;
user[3]="Total :"+total;
console.log(user);
alert('You purchased '+total)}
else if(options==mango || options==3){
var total=10*count;
user[0]="Fruit :"+"mango";
user[1]="Price of each :"+10;
user[3]="No. of fruits :"+count;
user[4]="Total :"+total;
console.log(user);
alert('You purchased '+total)}
else if(options==banana || options==4){
var total=5*count;
user[0]="Fruit :"+"banana";
user[1]="Price of each :"+5;
user[2]="No. of fruits :"+count;
user[3]="Total :"+total;
console.log(user);
alert('You purchased '+total)
}else if(options==5){
var total=20*count;
var fruit=prompt("which fruit do u want?")
user[0]="Fruit :"+fruit;
user[1]="Price of each :"+20;
user[2]="No. of fruits :"+count;
user[3]="Total :"+total;
console.log(user);
alert('You purchased '+total)}

}


