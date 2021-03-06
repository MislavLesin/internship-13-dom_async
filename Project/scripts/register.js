var user = {
  username: undefined,
  password: undefined,
};

function Validete() {
  const username = document.getElementById("username-input");
  const password1 = document.getElementById("password1-input");
  const password2 = document.getElementById("password2-input");
  const form = document.getElementsByClassName("login__window-form");

  if (username.checkValidity() == true) {
    if (password1.checkValidity() == true) {
      if (password2.checkValidity() == true) {
        if (password1.value.localeCompare(password2.value) == 0) {
          if (username.checkValidity() == true) {
            localStorage.setItem("username", username.value);
            localStorage.setItem("password", password1.value);
            SetToLogin();
            return;
          }
          alert("Password only valid");
        } else {
          alert("password invalid!");
        }
      }
    }
  }
}

function TogglePasswordVisibility() {
  const password1 = document.getElementById("password1-input");
  const password2 = document?.getElementById("password2-input");
  let type =
    password1.getAttribute("type") === "password" ? "text" : "password";
  password1.setAttribute("type", type);
  if (password2 != undefined) {
    type = password2.getAttribute("type") === "password" ? "text" : "password";
    password2.setAttribute("type", type);
  }
}

function SetToLogin() {
  document.getElementById("login-heading").style.display = "block";
  document.getElementById("register-heading").style.display = "none";
  document.getElementById("repeat-password-input").style.display = "none";
  document.querySelector(".submit-button").setAttribute("onclick","validateLogin();");
  document.querySelectorAll(".login__window-input").forEach((elemnt) => {
    elemnt.removeAttribute("required");
    elemnt.removeAttribute("minlength");
    elemnt.removeAttribute("maxlength");
  })
  
}

function validateLogin() {
  const username = document.getElementById("username-input").value;
  const password = document.getElementById("password1-input").value;
  if (
    username.localeCompare(localStorage.getItem("username")) == 0 &&
    password.localeCompare(localStorage.getItem("password")) == 0
  ) {
    window.location.href = "./jokes.html"
  }
  else alert("Login Failed!");
}

window.addEventListener("load", () => {
  user.userName = localStorage.getItem("username");
  user.password = localStorage.getItem("password");
  if (user?.userName != null || user.password != null) {
    SetToLogin();
  }
});