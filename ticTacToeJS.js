
var restart = document.querySelector("#restartButton");

var squares = document.querySelectorAll("td");

function clearBoard(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}

restart.addEventListener("click", clearBoard);


function changeMarker(){
  if (this.textContent=== "") {
      this.textContent="X";
  } else if (this.textContent==="X") {
      this.textContent="O";
  } else {
    this.textContent="";
  }
}


// okay so this just makes it so each square on the grid is clickable
// and changes marker when clicked upon. That's all it does.
// refers to the changeMarker function to actually accomplish something. 
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", changeMarker)
}
