const board = document.querySelector(".board");
let lastColoredSquares = [];

board.addEventListener("click", (evt) => {
  const clickedSquare = evt.target;
  if (clickedSquare.classList.contains("checkbox")) {
    resetSquares();
    const squareId = Number(clickedSquare.getAttribute("id"));
    const rowId = Number(clickedSquare.parentElement.getAttribute("id"));
    colorRookPath(squareId, rowId);
  }
});

function colorRookPath(squareId, rowId) {
  //left
  let row = rowId;
  let col = squareId;
  lastColoredSquares = [];

  while (col > (row - 1) * 8) {
    colorSquare(row, col, "red");
    col--;
  }

  //right
  row = rowId;
  col = squareId + 1;

  while (col <= row * 8) {
    colorSquare(row, col, "red");
    col++;
  }

  //bottom
  row = rowId + 1;
  col = squareId + 8;

  while (row <= 8) {
    colorSquare(row, col, "red");
    row++;
    col += 8;
  }

  //up
  row = rowId - 1;
  col = squareId - 8;

  while (row >= 1) {
    colorSquare(row, col, "red");
    row--;
    col -= 8;
  }
}

function resetSquares() {
  for (const squareElement of lastColoredSquares) {
    squareElement.style.backgroundColor =
      squareElement.getAttribute("old-color");
  }
}

function colorSquare(rowId, squareId, color) {
  const squareElements = document.querySelector(`.row[id="${rowId}"]`).children;
  let squareElement;
  for (const square of squareElements) {
    if (square.getAttribute("id") === `${squareId}`) {
      squareElement = square;
      break;
    }
  }
  squareElement.setAttribute("old-color", squareElement.style.backgroundColor);
  squareElement.style.backgroundColor = color;
  lastColoredSquares.push(squareElement);
}
