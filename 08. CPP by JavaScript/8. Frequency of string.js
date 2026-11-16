const myStr = "programming";

let chars = myStr.split("");
let uniqueMap = new Map();

for (let ch of chars){
    uniqueMap.set(ch, (uniqueMap.get(ch) || 0) +1)
}

console.log(uniqueMap)