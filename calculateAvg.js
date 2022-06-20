// Write a function which calculates the average of the numbers in a given list.



function find_average(array) {
  let totalnuminArray = 0
  if (array.length === 0){
    return 0
  } else {
  for (let i = 0; i < array.length; i++){
    totalnuminArray = totalnuminArray + array[i]
  }}
  return totalnuminArray / array.length
}
