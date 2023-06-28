function verifyMatchingPassword() {
  if (pwd_conf.value === pwd.value) {
    pwd_match = true;
    pwd_conf.style.borderColor = 'green';
  } else {
    pwd_match = false;
    pwd_conf.style.borderColor = 'red';
  }
} 

// Implements password matching
let pwd = document.querySelector('#pwd');
let pwd_conf = document.querySelector('#pwd-conf');
let pwd_match = false;
pwd_conf.addEventListener('keyup', (event) => {
  verifyMatchingPassword();
});

// To show the unfinished input
let form_input = document.querySelectorAll('form input');
form_input.forEach( input => {
  input.addEventListener('keyup', () => {
    if (!input.id === 'pwd-conf') {
      if (input.checkValidity()) input.style.borderColor = 'green';
      else input.style.borderColor = 'red';
    }
  });
  
  input.addEventListener('click', () => input.classList = 'was-clicked');
});

document.querySelector('#create-account-btn').addEventListener('click', (event) => {
  form_input.forEach( input => {
    if(!input.checkValidity()) {
      event.preventDefault();
      input.style.borderColor = 'red';
      document.querySelector('#invalid-notice').style.display = 'block';
    }
  });

  if (!pwd_match) {
    event.preventDefault();
    pwd_conf.style.borderColor = 'red';
    document.querySelector('#invalid-notice').style.display = 'block';
  }
});
