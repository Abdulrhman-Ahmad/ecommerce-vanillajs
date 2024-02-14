import { CustomElementLoader } from "./../../utils/utils/customElementLoader.js";

export class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    this.initializeAsync();
  }

  async initializeAsync() {
    await CustomElementLoader.loadComponent(this, "header");
    this.initialize();
  }

  initialize() {
    // Initialize Localstorage Variables
    initializingFromLocal();

    // adding event for shopping cart button in the header to open cart page
    let shoppingCartButton = document.querySelector(
      "#headerShoppingCartButton"
    );


    // ----------------------- [ Logged and UnLogged ] ---------------------------------
    let logged = document.querySelector("#logged");
    let unLogged = document.querySelector("#unLogged");

    let currentId = getItem(localCurrentLogged);
    if (currentId == "0" || !getItem(localCurrentLogged)) {
      logged.style.display = "none";
      setItem(localCurrentLogged, "0");
    } else {
      unLogged.style.display = "none";
      getDataBaseByIdProfile(usersUrl, currentId);
    }

    function getDataBaseByIdProfile(url, id) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          for (let element of data) {
            if (element.id == id) {
              createLoggedProfile(element);
              console.log("1");
              break;
            }
          }
        });
    }

    function createLoggedProfile(obj) {
      let link = document.querySelector("#loggedLink");
      let image = document.createElement("img");
      image.setAttribute("class", "img-fluid align-middle");
      image.setAttribute("id", "loggedImage");
      image.setAttribute("src", obj.image);

      let text = document.createTextNode(` ${obj.firstName}`);

      link.appendChild(image);
      link.appendChild(text);
    }

    unLogged.addEventListener("click", (e) => {
      let currentUrl = window.location.href;
      setItem(localPassedHref, currentUrl);
    });

    // get and set in local storage
    var addToCartBadgeCounter = getItem(localAddToCartCountedNum);
  }
  
}
