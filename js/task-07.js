const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener('input', onInputSlider);

function onInputSlider(event) {
    const inputValue = event.currentTarget.value;
    console.log(inputValue);
    refs.span.style.fontSize = `${inputValue}px`;
}