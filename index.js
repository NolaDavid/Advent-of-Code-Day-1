const fs = require("fs")


const lines = fs.readFileSync('day01.txt', { encoding: 'utf-8' }).split('\n')
let basket = []
let total = 0;
for(let i = 0; i < lines.length; i++){
 
    if(lines[i] > 0){
   
    total = total + Number(lines[i])
    
  }else {
    basket.push(total)
      total = 0;
  }
   
  
}
console.log("basket", basket.sort((a,b) => b - a).slice(0,3).reduce((acc,val) => {
  return acc + val
},0))
