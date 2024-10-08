const board = document.querySelector(".board");
let lastColoredSquares = [];

board.addEventListener("click", (evt) => {
  const clickedSquare = evt.target;
  if (clickedSquare.classList.contains("checkbox")) {
    resetSquares();
    const squareId = Number(clickedSquare.getAttribute("id"));
    const rowId = Number(clickedSquare.parentElement.getAttribute("id"));
    colorRookPath(squareId, rowId);
    colorBishopPath(squareId, rowId);
  }
});

function colorRookPath(squareId, rowId) {
  //left
  let row = rowId;
  let col = squareId;

  while (col > (row - 1) * 8) {
    colorSquare(row, col, "red");
    col--;
  }

  //right
  row = rowId;
  col = squareId;

  while (col <= row * 8) {
    colorSquare(row, col, "red");
    col++;
  }

  //bottom
  row = rowId;
  col = squareId;

  while (row <= 8) {
    colorSquare(row, col, "red");
    row++;
    col += 8;
  }

  //up
  row = rowId;
  col = squareId;

  while (row >= 1) {
    colorSquare(row, col, "red");
    row--;
    col -= 8;
  }
}

function colorBishopPath(squareId, rowId) {
  //upwards left
  let row = rowId;
  let col = squareId;

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
    squareElement.style.backgroundColor =
      squareElement.getAttribute("old-color");
  }
  lastColoredSquares = [];
}

function colorSquare(rowId, squareId, color) {
  let squareElement = document.querySelector(`.checkbox[id="${squareId}"]`);
  if (squareElement.style.backgroundColor === "red") {
    console.log("ran...");
    return;
  }
  squareElement.setAttribute("old-color", squareElement.style.backgroundColor);
  squareElement.style.backgroundColor = color;
  lastColoredSquares.push(squareElement);
}
