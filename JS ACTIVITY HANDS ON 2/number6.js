let number = [1,2,3,4];
const ps = require('prompt-sync');
const prompt = ps();

let firstIndex = prompt('first Index:');
console.log(number[0])
let ArrayNumber = prompt('Array number:')
console.log(number.length)
let suM = prompt('Sum of first value and array number:')
console.log(number[0] + number.length);