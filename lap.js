function LAPTOP(brand,ram,harddisk,screen,write,read,speaker){
  this.brand=brand
  this.ram=ram
  this.harddisk=harddisk
  this.screen=screen
  this.write=write
  this.read=read
  this.speaker=speaker
}
LAPTOP.prototype.cost=50000


let laptop=new LAPTOP('HP','8gb','500gb','LED','yes','yes','yes')
laptop.cost=60000
console.log(laptop);

let laptop1=new LAPTOP('lenovo','8gb','1TB','LcD','yes','yes','yes')
console.log(laptop1);

let laptop2=new LAPTOP('dell','8gb','500gb','touch','yes','yes','yes')
console.log(laptop2);
