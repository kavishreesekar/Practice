//-----------------------Spread Operator--------------------------------------

// Remove the repeated elements

let arr = [1,2,2,3,3,3,4,5,5]

let ans = [...new Set(arr)]

console.log(ans)

//add new array elemets

let arr2 =[1,2,3]

let ans2 = [...arr2, 4,5,6]

console.log(ans2)

//objects

let obj1 = { a:1, b:2, c:3}

let obj2 = {...obj1, d:4, e:5}

console.log(obj2)

//functions

function greet(first, ...others){
    console.log(first)
    console.log(others)
    console.log(first+","+others)
}

greet("Alice","Antony","Abi")