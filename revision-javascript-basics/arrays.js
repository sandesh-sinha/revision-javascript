const arr = ['agra' , 'jaipur', 50];
arr.pop();
console.log(arr);
arr.push('patna');
console.log(arr);
console.log(`I live in ${arr[arr.length-1]}`);

const numbers = ['One', 'two', 'three', 'four', 'five'];
//  push , pop at the end 
// unshift, shift at the start
numbers.shift();
numbers.unshift('one');
numbers.unshift('zero');
console.log(numbers);
numbers.splice(2,3 , 'replaced');    // splice(index, length , replaced value);
console.log(numbers);