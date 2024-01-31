function toggleResetPswd(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}

$(()=>{
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
})

let users = [
    {
        email: "asd123@gmail.com",
        password: "asd123"
    },
    {
        email: "asd456@gmail.com",
        password: "asd456"
    }
];

document.getElementById("form-signin-Login").addEventListener("click", function(event){
    event.preventDefault();
    verifyLogin();
});

function verifyLogin() {
    let email = document.getElementById('inputEmail');
    let password = document.getElementById('inputPassword');
    let userInDb = verifyEmail(email.value);

    if (userInDb != null) {
        if(verifyPassword(userInDb.password, password.value)) {
            window.location.href = "index.html";
        } else {
            alert('Datos incorrectos');
        }
    }
}
function verifyEmail(inputEmail) {
    return userInDb = users.find(user => user.email == inputEmail);
}
function verifyPassword(userPasswordInDb, inputPassword) {
    return userPasswordInDb === inputPassword;
}