function handleFocus(event) {
  console.log('focus event fired');
  console.log('target name ' + event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('target name ' + event.target.name);
}

function handleInput(event) {
  console.log('input event fired');
  console.log('target name ' + event.target.name);
  console.log('value of input ' + event.target.value);
}

const formcontrol = document.querySelectorAll('input', 'textarea');

for (let i = 0; i < formcontrol.length; i++) {
  formcontrol[i].addEventListener('focus', handleFocus);
  formcontrol[i].addEventListener('blur', handleBlur);
  formcontrol[i].addEventListener('input', handleInput);
}
