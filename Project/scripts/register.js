
function Validete() {
    const username = document.getElementById("username-input");
    const password1 = document.getElementById("password1-input");
    const password2 = document.getElementById("password2-input");
    const form = document.getElementsByClassName("login__window-form");
    
    
    if(username.checkValidity() == true) {
        alert("Username valid");
    }
    if(password1.checkValidity() == true) {
        if(password2.checkValidity() == true) { 
            if(password1.value.localeCompare(password2.value) == 0){
                if(username.checkValidity() == true) {
                    alert("Password and username valid");
                    localStorage.setItem("username",username.value);
                    localStorage.setItem("password",password1.value);
                }
                alert("Password only valid");
            }
            else {
                alert("password invalid!");
            }
        }
    }

}

function TogglePasswordVisibility() {
    const password1 = document.getElementById("password1-input");
    const password2 = document?.getElementById("password2-input");
    let type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
    password1.setAttribute('type', type);
    if(password2 != undefined) {
        type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
        password2.setAttribute('type', type);
    }
 
}

function SetToLogin() {
    document.getElementById("login-heading").style.display = "block";
    document.getElementById("register-heading").style.display = "none";
    document.getElementById("password2-input").style.display = "none";
    document.getElementById("password2-input").removeAttribute("required");
}





