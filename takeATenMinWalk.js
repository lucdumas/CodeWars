// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.



function isValidWalk(walk) {
    let filteredForN = walk.filter(x => x === 'n' )
    let filteredForS = walk.filter(x => x === 's' )
    let filteredForW = walk.filter(x => x === 'w' )
    let filteredForE = walk.filter(x => x === 'e' )
  if (walk.length === 10 && filteredForN.length === filteredForS.length && filteredForW.length === filteredForE.length) {
      return true
  } else {
      return false
  }

}
