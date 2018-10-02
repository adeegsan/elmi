var fname = document.getElementById('firstName');
var lname = document.getElementById('lastName');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var courses = document.getElementById('course');
var regForm = document.getElementById('regform');
var joinBtn = document.getElementById('join');
var btn = document.getElementById('register');
var success = document.getElementById('success');
var message = "<p class='text-success successmsg'> Thanks for Registring we will contact you soon, Before Course start. </p>";
var errorMsg = "<p class='text-danger errormsg'> All fields are required.</p>";




//Function to submit data to google sheets.

function insertDataToGoogleSheet() {
    'use strict';

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxrgyG_pG6uqFUSu-ov5yUw_F-seSm6SsVaumfZz7jYLaWgkbI/exec';
    const form = document.forms['submit-to-google-sheet'];


    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            alert('Thanks: Registration completed Successfully.');
            success.innerHTML = message;

            form.reset();
        })
        .catch(error => console.error('Error!', error.message));

}




btn.addEventListener('click', function (e) {
    e.preventDefault();



    if (fname.value !== '' && lname.value !== '' && email.value !== '' && phone.value !== '' && courses.value !== '') {

        insertDataToGoogleSheet();

    } else {

        success.innerHTML = errorMsg;
        return false;
    }
});



function shakeForm(e) {
    e.preventDefault;
    regForm.classList.toggle("shake");

}

joinBtn.addEventListener('click', shakeForm);
