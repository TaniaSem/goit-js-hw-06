function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  input: document.querySelector("#controls > input"),
  boxes: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener("click", onCreateBtnClick);
refs.btnDestroy.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  if (refs.input.value > 0) {
    refs.boxes.innerHTML = "";
    return createBoxes(refs.input.value);
  }
}

function onDestroyBtnClick() {
  refs.boxes.innerHTML = "";
}

function createBoxes(amount) {
  const boxesConteiner = [];
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${(width += 10)}px`;
    box.style.height = `${(height += 10)}px`;

    boxesConteiner.push(box);
  }

  refs.boxes.append(...boxesConteiner);
}