const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = form.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email.length === 0 || password.length === 0) {
      alert("All areas must be filled");
      return false;
  }
    
    const formData = {
      email,
      password,
    };

    form.reset();
    console.log(formData);
}
