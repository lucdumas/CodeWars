// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

let solution = (num) => {
  let newArray = []
  if (num <= 0) {
    return 0
  } else {
    for (let i = 0; i < num; i = i + 5) {
      newArray.push(i)
    }
    for (let y = 0; y < num; y = y + 3) {
      newArray.push(y)
    }

    let newArrayFiltered = newArray.filter((val, pos) => {
      return newArray.indexOf(val) === pos
    })

    let sumOfFilteredArray = newArrayFiltered.reduce((a, b) => a + b)

    return sumOfFilteredArray
  }
}
