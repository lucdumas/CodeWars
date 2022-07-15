// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.



function findOdd(a) {
  for(let i = 0; i < a.length; i++){
    const count = a.filter(value => value === a[i]).length;
    if(count % 2 == 1){
      return a[i];
    }
  }
  return -1;
}
