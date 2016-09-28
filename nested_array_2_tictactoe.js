function tic_tac_toe_board() {
  var xo_random1 = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
  var xo_random2 = ["O", "X", "O", "X", "O", "X", "O", "X", "O"]
  var rng = Math.floor((Math.random() * 2) + 1)
  if (rng === 1){
    return shuffle(xo_random1)
  }
  if (rng === 2){
    return shuffle(xo_random2)
  }

}
function separate(array){
  var board = []
  var x,y, chunk = 3

  for (x = 0, y = 9; x < y; x += chunk){
    board.push(array.slice(x ,x+chunk))
  }
  return board
}
function shuffle(array){
  for (var i = array.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i+1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return separate(array)
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
