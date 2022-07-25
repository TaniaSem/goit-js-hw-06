const refs = {
  value: document.querySelector("#value"),
  btnIncrement: document.querySelector("[data-action = increment]"),
  btnDecrement: document.querySelector("[data-action = decrement]"),
};

refs.btnIncrement.addEventListener("click", onBtnIncrementClick);
refs.btnDecrement.addEventListener("click", onBtnDecrementClick);

let counterValue = 0;

function onBtnIncrementClick() {
  counterValue += 1;

  refs.value.textContent = counterValue;
}
function onBtnDecrementClick() {
  counterValue -= 1;

  refs.value.textContent = counterValue;
}