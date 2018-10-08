let ips=['192.168.13.1','192.168.13.2','192.168.13.3','192.168.13.4','192.168.13.5']
let color=['Pink','Blue','Green'];
let city=['rjy','elu','bmv']
let friends=[ips,color,city]
let family = [color,city]
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
