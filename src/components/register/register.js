import { CustomElementLoader } from "./../../utils/customElementLoader.js";
export class Register extends HTMLElement {
  constructor() {
    super();

    this.initializeAsync();
  }

  async initializeAsync() {
    await CustomElementLoader.loadComponent(this, "register");
    this.initialize();
  }

  initialize() {
    let firstNameInput = document.querySelector("#firstNameInput");
    let lastNameInput = document.querySelector("#lastNameInput");
    let emailInput = document.querySelector("#emailInput");
    let passwordInput = document.querySelector("#passwordInput");
    let phoneInput = document.querySelector("#mobileInput");
    let confirmButton = document.querySelector("#confirmButton");

    let gender = 0;

    let radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach((radio) => {
      radio.addEventListener("click", (e) => {
        gender = e.target.getAttribute("value");
      });
    });

    mainForm.addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("s");
      let email = emailInput.value;
      checkEmail(usersUrl, email);
    });

    function storeUserData() {
      fetch(usersUrl)
        .then((res) => res.json())
        .then((data) => {
          let totalLength = data.length;
          let id = parseInt(totalLength) + 1;

          let userData = {
            id: `${id}`,
            firstName: `${firstNameInput.value}`,
            lastName: `${lastNameInput.value}`,
            gender: `${gender}`,
            email: `${emailInput.value}`,
            password: `${passwordInput.value}`,
            phone: `${phoneInput.value}`,
            image: `https://picsum.photos/200/200`,
          };

          checkEmail(usersUrl, userData.email);

          data[totalLength] = userData;
          setItem(localCurrentLogged, id);
          putData(usersUrl, data);
        });
    }

    function checkEmail(url, email) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let state = false;
          for (let element of data) {
            if (element.email == email) {
              state = true;
              console.log("repeated");
              break;
            }
          }

          if (!state) {
            storeUserData();
            console.log("noRepeated");
          } else {
            alert("repeated Email");
          }
        });
    }
  }
}
