import { CustomElementLoader } from "/src/utils/customElementLoader.js";
export class Account extends HTMLElement {
  constructor() {
    super();

    this.initializeAsync();
  }

  async initializeAsync() {
    await CustomElementLoader.LoacComponent(this, 'account');
    this.initialize();
  }

  initialize() {
    // check if admin logged
    let addButton = document.querySelector("#addProductPage");
    let value = getItem(localCurrentLogged);
    if (value == Admin) {
      addButton.style.display = "block";
    }
    window.addEventListener("load", (e) => {
      let value = getItem(localCurrentLogged);
      if (value == Admin) {
        addButton.style.cssText = "display: block !important";
      }
    });

    addButton.addEventListener("click", (e) => {
      e.preventDefault();

      window.location.href = "../html/addProductPage.html";
    });

    // ====================== [ Load User Data ] ==========================

    let firstName = document.querySelector("#firstName");
    let lastName = document.querySelector("#lastName");
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let Password = document.querySelector("#password");

    let id = getItem(localCurrentLogged);

    findUser(id);

    function findUser(id) {
      let url = usersUrl;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          for (let element of data) {
            if (element.id == parseInt(id)) {
              fillAccountData(element);
              console.log(element);
              break;
            }
          }
        });
    }

    function fillAccountData(obj) {
      let firstName = document.querySelector("#firstName");
      let lastName = document.querySelector("#lastName");
      let gender = document.querySelector("#gender");
      let email = document.querySelector("#email");
      let password = document.querySelector("#password");
      let image = document.querySelector("#accountImage");

      firstName.setAttribute("value", obj.firstName);
      lastName.setAttribute("value", obj.lastName);
      gender.setAttribute("value", obj.phone);
      email.setAttribute("value", obj.email);
      password.setAttribute("value", obj.password);
      image.setAttribute("src", obj.image);
    }

    // ============================ [ Log Out ] ===========================
    let logOutButton = document.querySelector("#LogOutButton");
    logOutButton.addEventListener("click", (e) => {
      e.preventDefault();
      setItem(localCurrentLogged, 0);
      setItem(localCartData, "null");
      setItem(localAddToCartCountedNum, 0);
      window.location.href = "../html/signInPage.html";
    });
  }
}
