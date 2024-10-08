const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const resetButton = document.querySelector("#reset");
const counterSpanElement = document.querySelector("#number");

addButton.addEventListener("click", () => {
  const value = getInputValue();
  if (!value) {
    return;
  }
  counterSpanElement.textContent =
    Number(counterSpanElement.textContent) + value;
});

subtractButton.addEventListener("click", () => {
  const value = getInputValue();
  if (!value) {
    return;
  }
  counterSpanElement.textContent =
    Number(counterSpanElement.textContent) - value;
});

resetButton.addEventListener("click", () => {
  counterSpanElement.textContent = 0;
});

function getInputValue() {
  const input = document.querySelector("#increment");
  return Number(input.value);
}
