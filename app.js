var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var courses = document.getElementById('courses');
var regForm = document.getElementById('regform');
var joinBtn = document.getElementById('join');
var btn = document.getElementById('register');
var success = document.getElementById('success');
var message = "<p class='text-success successmsg'> We are Working on the Online Registration System, Please Try Later. Thanks for Understanding. </p>";
var errorMsg = "<p class='text-danger errormsg'> All fields are required.</p>";




btn.addEventListener('click', function () {



    if (fname.value !== '' && lname.value !== '' && email.value !== '' && phone.value !== '' && courses.value !== '') {

        success.innerHTML = message;
    } else {

        success.innerHTML = errorMsg;
    }
});



joinBtn.addEventListener('click', shakeForm);

function shakeForm(e) {
    e.preventDefault;
    regForm.classList.toggle("slideInRight");
    regForm.classList.toggle("shake");
}
