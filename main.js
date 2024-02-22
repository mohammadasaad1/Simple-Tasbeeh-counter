let buttons = document.querySelectorAll(".button-82-pushable");
let resetButton = document.querySelector(".row button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let countEl = button.parentElement.children[1];
    countEl.textContent = parseInt(countEl.textContent) + 1;
  });
});

resetButton.addEventListener("click", () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].parentElement.children[1].textContent = 0;
  }
});
