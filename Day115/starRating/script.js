const starContainer = document.querySelector("#star-container");
const countElement = document.querySelector("#count");

let lastColoredStarIndex = -1;

function colorStarsToYellow(tillIndex, isClicked) {
  const children = starContainer.children;
  tillIndex = Number(tillIndex);
  let lastColoredIndex = -1;
  for (let i = 0; i < 5; i++) {
    const starElement = children[i];
    if (i < tillIndex) {
      starElement.classList.add("star-filled");
      if (isClicked) {
        lastColoredIndex = i + 1;
      }
    } else {
      starElement.classList.remove("star-filled");
    }
  }
  if (isClicked) {
    lastColoredStarIndex = lastColoredIndex;
    countElement.textContent = lastColoredIndex;
  }
}

starContainer.addEventListener("mouseover", (evt) => {
  const clickedStar = evt.target;
  if (clickedStar.hasAttribute("data-index")) {
    const clickedIndex = clickedStar.dataset.index;
    colorStarsToYellow(clickedIndex);
  }
});

starContainer.addEventListener("mouseleave", () => {
  colorStarsToYellow(lastColoredStarIndex);
});

starContainer.addEventListener("click", (evt) => {
  const clickedStar = evt.target;
  if (clickedStar.hasAttribute("data-index")) {
    const clickedIndex = clickedStar.dataset.index;
    colorStarsToYellow(clickedIndex, true);
  }
});
