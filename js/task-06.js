const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const inputDefaultLength =+ validationInput.getAttribute("data-length");
    const inputCurrentLength = event.currentTarget.value.length;

    if (inputCurrentLength === inputDefaultLength) {
        validationInput.classList.remove("invalid");
        return validationInput.classList.add("valid");
    }
    validationInput.classList.remove("valid");
    return validationInput.classList.add("invalid");
}

