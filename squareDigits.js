

// In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.


function squareDigits(num){
 let array1 = [...num.toString()]
 let array2 = []
 for(let i=0; i < array1.length; i++ ) {
     array2.push(array1[i] * array1[i])
 }
    return parseInt(array2.join(''))
}

