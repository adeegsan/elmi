
var script_url = "https://script.google.com/macros/s/AKfycbw_qKyG_T9MsFARudDRFdR8zUsXdXWXmchgjChme8yJ7NofK_8/exec";


function insert_value() {
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var level = $("#level").val();
    var course = $("#course option:selected").val();

    var url = script_url + "?callback=ctrlq&fname=" + fname + "&lname=" + lname + "&phone=" + phone + "&email=" + email + "&level=" + level + "&course=" + course + "&action=insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });

    document.getElementById("regform").reset();
    console.log(fname, lname, phone, email, level, course);
}

function ctrlq(e) {
    alert('Congrats! Registered Successfully')
}












//var fname = document.getElementById('fname');
//var lname = document.getElementById('lname');
//var email = document.getElementById('email');
//var phone = document.getElementById('phone');
//var courses = document.getElementById('courses');
//var regForm = document.getElementById('regform');
//var joinBtn = document.getElementById('join');
//var btn = document.getElementById('register');
//var success = document.getElementById('success');
//var message = "<p class='text-success successmsg'> We are Working on the Online Registration System, Please Try Later. Thanks for Understanding. </p>";
//var errorMsg = "<p class='text-danger errormsg'> All fields are required.</p>";
//
//
//
//
//btn.addEventListener('click', function () {
//
//
//
//    if (fname.value !== '' && lname.value !== '' && email.value !== '' && phone.value !== '' && courses.value !== '') {
//        
//        
//
//        success.innerHTML = message;
//    } else {
//
//        success.innerHTML = errorMsg;
//    }
//});
//
//
//
//joinBtn.addEventListener('click', shakeForm);
//
//function shakeForm(e) {
//    e.preventDefault;
//    regForm.classList.toggle("slideInRight");
//    regForm.classList.toggle("shake");
//    return false;
//}
