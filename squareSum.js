// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.




function squareSum(numbers){
 let newarray =  numbers.map(item => item * item)
let newArray1 = newarray.reduce((x, y) => x + y, 0)
return newArray1
}
