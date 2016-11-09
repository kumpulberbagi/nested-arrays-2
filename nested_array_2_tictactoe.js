
function tic_tac_toe_board() {
  var array = []
  for (var i = 1; i < 10; i++) {
    array.push(i)
  }

  var letter_gird = [];
  var chunk = 3;
  for (var j = 0; j < array.length; j+=chunk) {
    letter_gird.push(array.slice(j, j+chunk))
  }


  return letter_gird;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
