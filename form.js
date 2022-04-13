const form = document.getElementById('form');
const email = document.getElementById('email');
const errorElement = document.getElementById('error');

function valid(input) {
  if (input === input.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

form.addEventListener('submit', (event) => {
  if (!valid(email.value)) {
    event.preventDefault()
    errorElement.innerText = 'Please enter your email address in lower casing';
  }
})
