const board = document.querySelector(".board");
let lastColoredSquares = [];

board.addEventListener("click", (evt) => {
  const clickedSquare = evt.target;
  if (clickedSquare.classList.contains("checkbox")) {
    resetSquares();
    const squareId = Number(clickedSquare.getAttribute("id"));
    const rowId = Number(clickedSquare.parentElement.getAttribute("id"));
    colorBishopPath(squareId, rowId);
  }
});

function colorBishopPath(squareId, rowId) {
  //upwards left
  let row = rowId;
  let col = squareId;
  lastColoredSquares = [];

  while (row >= 1 && col >= row * 8 - 8 + 1) {
    colorSquare(row, col, "red");
    row--;
    col -= 9;
  }

  //upwards right
  row = rowId;
  col = squareId;

  while (row >= 1 && col <= row * 8) {
    colorSquare(row, col, "red");
    row--;
    col -= 7;
  }

  //bottom left
  row = rowId;
  col = squareId;

  while (row <= 8 && col >= row * 8 - 8 + 1) {
    colorSquare(row, col, "red");
    row++;
    col += 7;
  }

  //bottom right
  row = rowId;
  col = squareId;

  while (row <= 8 && col <= row * 8) {
    colorSquare(row, col, "red");
    row++;
    col += 9;
  }
}

function resetSquares() {
  for (const squareElement of lastColoredSquares) {
    squareElement.style.backgroundColor = "white";
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
  lastColoredSquares.push(squareElement);
  squareElement.style.backgroundColor = color;
}
