var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var courses = document.getElementById('courses');
var btn = document.getElementById('register');
var success = document.getElementById('success');
var message = "<p class='text-success successmsg'> Something Went Wrong Please Try Later.</p>";
var errorMsg = "<p class='text-danger errormsg'> All fields are required.</p>";




btn.addEventListener('click', function(){
    
    
    
    if(fname.value !== '' && lname.value !== '' && email.value !== '' && phone.value !== '' && courses.value !== ''){
        
        success.innerHTML = message;
    } else {
        
        success.innerHTML = errorMsg;
    }
});