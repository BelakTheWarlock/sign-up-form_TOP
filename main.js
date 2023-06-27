function verifyMatchingPassword() {
  if (pwd_conf.value === pwd.value) {
    pwd_match = true;
    pwd_conf.style.borderColor = 'green';
  } else {
    pwd_match = false;
    pwd_conf.style.borderColor = 'red';
  }
} 

let pwd = document.querySelector('#pwd');
let pwd_conf = document.querySelector('#pwd-conf');
let pwd_match = false;
pwd_conf.addEventListener('keyup', (event) => {
  verifyMatchingPassword();
});

let form_input = document.querySelectorAll('form input');
form_input.forEach( input => {
  input.addEventListener('click', () => input.classList = 'was-clicked');
});

document.querySelector('#create-account-btn').addEventListener('click', (event) => {
  let found_invalid = false;
  form_input.forEach( input => {
    if (!input.checkValidity()) {
      input.style.borderColor = 'red';
      found_invalid = true;
      input.addEventListener('blur', () => {
        if (input.checkValidity()) {
		// Needs some fixin'
	  input.style.borderColor = 'green';
        }
      });
    }
  });
  if (!pwd_match) found_invalid = true;
  
  if (found_invalid) {
    event.preventDefault();
    document.querySelector('#invalid-notice').style.display = 'block';
  }
});
