const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const key = 'feedback-form-state';
const obj = {
  email: '',
  message: '',
};

// const testObj = { email: 'email', message: 'message' };

form.addEventListener('input', onInputForm);
form.addEventListener('submit', onSubmitForm);

// console.log(obj.email);
// localStorage.setItem(
//   'test-obj',
//   JSON.stringify(testObj)
// );

checkLocalStorageForKeys('test-obj');

function checkLocalStorageForKeys(key) {
  if (localStorage.length !== 0) {
    const savedObj = JSON.parse(localStorage.getItem(key));
    input.value = savedObj.email;
    textarea.value = savedObj.message;
  } 
}

function onInputForm(event) {
  event.preventDefault();
  (obj.email = input.value), (obj.message = textarea.value);
  localStorage.setItem(key, JSON.stringify(obj));
}

function onSubmitForm(event) {
  event.preventDefault();
  console.log(obj);
  input.value = '';
  textarea.value = '';
  localStorage.removeItem(key);
}
