function tic_tac_toe_board() {
  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

  var rand = 0, x=0,o=0, flagx=0, flago=0;

  var array = [];

  rand = Math.floor(Math.random() * 2) + 1;

  console.log(rand);
  if(rand == 1) {
    for(var l=0; l<9; l++) {
      if(flagx == 0) {
        array.push("X");
        // x++;
        flagx = 1;
        flago = 0;
      }
      else if(flago == 0) {
        array.push("O");
        // o++;
        flagx = 0;
        flago = 1;
      }
    }
  }
  else if(rand == 2){
    for(var l=0; l<9; l++) {
      if(flago == 0) {
        array.push("O");
        // x++;
        flagx = 0;
        flago = 1;
      }
      else if(flagx == 0) {
        array.push("X");
        // o++;
        flagx = 1;
        flago = 0;
      }
    }
  }

  var tictac = [];

  for(var i=0; i<3; i++) {
    tictac.push(array.slice(i, i+3));
  }

  return tictac;

}

console.log(tic_tac_toe_board()) // => make a random tic tic board
