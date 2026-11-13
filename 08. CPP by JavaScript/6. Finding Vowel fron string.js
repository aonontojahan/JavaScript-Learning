
let str = "JavaScript Programming";

let vowels = "";

for (let i = 0; i < str.length; i++) {

    let char = str[i].toLowerCase();

    if (
        char === 'a' ||
        char === 'e' ||
        char === 'i' ||
        char === 'o' ||
        char === 'u'
    ) {
        vowels = vowels + char;
    }

}

console.log("Vowels:", vowels);
