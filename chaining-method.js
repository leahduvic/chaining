// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

const total = integers.sort(function(a,b){return (b-a)}).filter(function (value){return value < 19}).map(function(int){return int *1.5 -1}).reduce(function(sum, value){return sum + value}) 


// // // Sort the numbers in descending order (10, 9, 8, 7, etc).
// function descending(a, b) {
//     return (b-a)
// }
// console.log(integers.sort(descending))
// // // Remove any integers greater than 19.

// let integer = integers.sort(descending)

// let removedElements = integer.splice(0, 4);
// console.log(integers)
// // // Multiply each remaining number by 1.5 and then subtract 1.
//  let mutliply = integers.map(function(int) {
//      let value = int *1.5 - 1;
//      console.log(value)
//      return value
// })
// // // Then output (either in the DOM or the console) the sum of all the resulting numbers.
// const ten = [18, 13, 12, 11, 8, 7, 6, 3, 2, 1];

// const total = ten.reduce(function(sum, value) {
//     return sum + value 
// }) 
// console.log(total)


