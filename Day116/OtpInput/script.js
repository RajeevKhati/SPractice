const inputContainer = document.querySelector("#inputs");

inputContainer.addEventListener("keyup", (evt) => {
  const inputElement = evt.target;

  if (isNaN(inputElement.value)) {
    return;
  }
  if (inputElement.value === "" || evt.key === "Delete") {
    const previousSibling = inputElement.previousElementSibling;
    inputElement.value = "";
    if (previousSibling) {
      previousSibling.focus();
    }
    return;
  }

  const nextSibling = inputElement.nextElementSibling;
  if (nextSibling) {
    nextSibling.focus();
  }
});
