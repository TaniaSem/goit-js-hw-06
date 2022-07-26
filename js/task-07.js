const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener('input', onInputSlider);
const inputDefaultValue = refs.input.value;
// console.log(inputDefaultValue);
refs.span.style.fontSize = inputDefaultValue + 'px';

function onInputSlider(event) {
  const inputValue = event.currentTarget.value;
  console.log(inputValue);
  refs.span.style.fontSize = `${inputValue}px`;
}