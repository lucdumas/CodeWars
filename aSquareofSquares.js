// Given an integral number, determine if it's a square number:


let isSquare = function(n){
for (let i = 0;; i++) {
    let product = i * i;
    if (product === n) return true;
    else if (product > n) return false;
  }
}
