// program to find the vowels and constants from a given string

let vowels=""
let constants=""

let str = "Umberlla"

for(let i=0;i<str.length;i++){
    let c = str.charAt(i)
    if(c === 'a'||c === 'e'||c === 'i'||c === 'o'||c === 'u'){
        vowels+=c;
    }
    else{
        constants+=c;
    }
}

console.log(`vowels in the string : ${vowels}`);
console.log(`Constants in the string : ${constants}`);
