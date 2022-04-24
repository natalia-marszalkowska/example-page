const form = document.querySelector('.form');
const username = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const messageContainer = document.querySelector('.message');

function setError(element, message) {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');

    errorDisplay.innerText = message;
    inputField.classlist.add('.error');
    inputField.classlist.remove('.success');
}

function setSuccess(element) {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');

    errorDisplay.innerText = '';
    inputField.classlist.add('.success');
    inputField.classlist.remove('.error')
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateForm() {
    const usernameValue = username.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();

    if (username === '') {
        setError(username, 'Email is required');
    } else {
        setSuccess(username);
    }

    if (phoneValue === ''){
        setError(phone, 'Phone is required');
    } else {
        setSuccess(phone);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
}

function processForm(e) {
    e.preventDefault();
    validateForm();
}

form.addEventListener('submit', e => {
    e.preventDefault();

    validateForm();
});