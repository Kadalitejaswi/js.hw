let ages=[23,24,25]
let names=['Tejaswi','suseela','Sowjanya'];
let mobile=['123','455','789']
let college=['abc','def','hij']
let city=['rjy','elu','bmv']
let friends=[names,ages,mobile]
let family = [city,college]
let combo=[friends,family]
// console.log(combo);

for(var i=0;i<combo.length;i++){
    console.log(`combo ${i} ${j} ${k}:`,combo[i]);
    for(var j=0;j<combo[i].length;j++){
        console.log(`combo ${i} ${j} ${k} :`,combo[i][j]);
        for(var k=0;k<combo[i][j].length;k++){
            console.log(`combo ${i} ${j} ${k}:`,combo[i][j][k]);
        }
        }
    
    }
