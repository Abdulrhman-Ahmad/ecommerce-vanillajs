import { CustomElementLoader } from "./../../utils/customElementLoader.js";
export class Login extends HTMLElement {
  constructor() {
    super();

    this.initializeAsync();
  }

  async initializeAsync() {
    await CustomElementLoader.loadComponent(this, "login");
    this.initialize();
  }

  initialize() {
    // Global Pass And Password
    var username = 0;
    var password = 0;

    // ---------------- [ Email Validation ] ------------------------
    let emailInput = document.getElementById("emailInput");
    let passwordInput = document.getElementById("PasswordInput");

    let patternEmail = /^[a-z]{3,}@[a-z]{3,}(.net|.com|.org){1}$/;
    let submitButton = document.getElementById("mainForm");

    submitButton.addEventListener("submit", (e) => {
      e.preventDefault();
      username = emailInput.value;
      password = passwordInput.value;

      console.log(patternEmail.test(emailInput.value));
      if (patternEmail.test(emailInput.value)) {
        console.log("right");
        if (patternEmail.test(username)) {
          // console.log(username);
          // console.log(password);
          searchForEmail(usersUrl, username, password);
        } else {
          console.log("invalid");
        }
      } else {
        alert("invalid email");
      }
    });
    // ---------------------------------------------------------------

    function searchForEmail(url, email, pass) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let state = false;
          for (let element of data) {
            if (element.email == email) {
              if (element.password == pass) {
                setItem(localCurrentLogged, element.id);
                window.location.href = getItem(localPassedHref);
                state = true;
                break;
              } else {
                setItem(localCurrentLogged, 0);
              }
            }
          }
          if (!state) {
            alert("Invalid password or email");
          }
        });
    }

    let state = getItem(localCurrentLogged);
    if (state != "0") {
      window.location.href = "productsPage.html";
    }
  }
}
