function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.body,
  changeColorBtn: document.querySelector(".change-color"),
  outputColor: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener("click", onChangeColorBtn);

function onChangeColorBtn() {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.outputColor.textContent = color;
}
