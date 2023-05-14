const form = document.querySelector('#contact-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formControls = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value
  };
  console.log(formControls);
  form.reset();
});
