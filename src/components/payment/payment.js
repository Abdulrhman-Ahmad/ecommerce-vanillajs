import { CustomElementLoader } from "./../../utils/customElementLoader.js";
export class Payment extends HTMLElement {
  constructor() {
    super();

    this.initializeAsync();
  }

  async initializeAsync() {
    await CustomElementLoader.loadComponent(this, "payment");
    this.initialize();
  }

  initialize() {

    window.addEventListener("load", (e) => {
      let value = parseInt(getItem(localCurrentLogged));

      if (!value) {
        console.log(value);
        window.location.href = "signInPage.html";
      }
    });

    let TotalAmount = 0;

    function CreateCardsForCheck(obj) {
      let productsContainer = document.querySelector("#productsContainer");

      let cardContainer = document.createElement("div");
      cardContainer.setAttribute("id", "cardContainer");
      cardContainer.setAttribute("class", "card mb-3, w-100");

      let imageAndTextHolder = document.createElement("div");
      imageAndTextHolder.setAttribute("class", "row g-0");

      let imageHolder = document.createElement("div");
      imageHolder.setAttribute("class", "col-3");

      let image = document.createElement("img");
      image.setAttribute("class", "img-fluid rounded-start");
      image.setAttribute("src", obj.images[0]);

      let textContainer = document.createElement("div");
      textContainer.setAttribute("class", "row col-9");

      let productName = document.createElement("p");
      productName.setAttribute("class", "card-text col-12 smaller");
      productName.innerHTML = obj.title;

      let productPrice = document.createElement("h5");
      productPrice.setAttribute("class", "card-text fs-6 col-12");
      productPrice.innerHTML = `${obj.price}LE`;

      textContainer.appendChild(productName);
      textContainer.appendChild(productPrice);

      imageHolder.appendChild(image);

      imageAndTextHolder.appendChild(imageHolder);
      imageAndTextHolder.appendChild(textContainer);

      cardContainer.appendChild(imageAndTextHolder);

      productsContainer.appendChild(cardContainer);
      let br = document.createElement("hr");
      cardContainer.appendChild(br);
    }

    function getCartDataBaseById(url, id) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let state = false;
          for (let element of data) {
            if (element.id == parseInt(id) + 1) {
              execute(element);
              state = true;
              break;
            }
          }

          if (!state) {
            console.log("Not found");
            // do something here ... write code to execute
          }
        });
      function execute(data) {
        createCartProduct(data);
        TotalAmount = TotalAmount + data.price;

        totalPrice.innerHTML = TotalAmount;
      }
    }

    function getStoredData() {
      if (getItem(localCartData) != null) {
        let dataStore = getItem(localCartData).split(",");
        for (let item of dataStore) {
          getCartDataBaseById(productsUrl, parseInt(item));
        }
      }
    }

    function getCartDataBaseById(url, id) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let state = false;
          for (let element of data) {
            if (element.id == parseInt(id) + 1) {
              execute(element);
              state = true;
              break;
            }
          }

          if (!state) {
            console.log("Not found");
            // do something here ... write code to execute
          }
        });
      function execute(data) {
        CreateCardsForCheck(data);
        TotalAmount = TotalAmount + data.price;

        totalPrice.innerHTML = TotalAmount;
      }
    }

    getStoredData();

    var cardName = document.getElementById("cardName");

    var cardNum1 = document.getElementById("firstFour");
    var cardNum2 = document.getElementById("secondFour");
    var cardNum3 = document.getElementById("thirdFour");
    var cardNum4 = document.getElementById("fourthFour");
    var cardNumAll = document.querySelectorAll(".cardNum");
    var alertMsg = document.getElementById("alert");
    var doneMsg = document.getElementById("doneMsg");

    var expirationDate = document.getElementById("expirationDate");
    var cvv = document.querySelector('#cvv');

    var payBtn = document.getElementById("payBtn");

    // card number validation/////////////////
    
    function prev(event) {
      if (event.key.match(/[0-9]/i)) {
      } else {
        event.preventDefault();
      }
    }
    function check() {
      if (cardNumAll[i].value.length > 3 && i <= 2) {
        cardNumAll[i].blur();
        cardNumAll[i + 1].focus();
      } else if (cardNumAll[i].value.length > 3 && i == 3) {
        cardNumAll[i].blur();
        expirationDate.focus();
      }
    }

    for (let i = 0; i < cardNumAll.length; i++) {
      cardNumAll[i].addEventListener("keypress", prev);
      cardNumAll[i].addEventListener("keyup", check);
      function prev(event) {
        if (event.key.match(/[0-9]/i)) {
        } else {
          event.preventDefault();
        }
      }
      function check() {
        if (cardNumAll[i].value.length > 3 && i <= 2) {
          cardNumAll[i].blur();
          cardNumAll[i + 1].focus();
        } else if (cardNumAll[i].value.length > 3 && i == 3) {
          cardNumAll[i].blur();
          expirationDate.focus();
        }
      }
    }

    /////////////////////Expiration Date validation////
    expirationDate.addEventListener("keypress", (event) => {
      if (event.key.match(/[0-9\/]/i)) {
      } else {
        event.preventDefault();
      }
    });
    expirationDate.addEventListener("keyup", () => {
      if (expirationDate.value.length == 7) {
        expirationDate.blur();
        cvv.focus();
      }
    });

    ////////////////////////////////////////////////////////////// Alert Validation /////////////////////////////////////////////////////////
    ///////////cvv validation////////////////////////
    cvv.addEventListener("keypress", prev);

    ///////////////////////////////////////////////
    payBtn.addEventListener("click", checkForm);

    function checkForm() {
      // card name //////////////////
      if (cardName.value.match(/^[a-z\s]{3,}/gim)) {
        // card number////////////////////////
        if (cardNumFunc()) {
          // expiration Date////////////////////////////////////
          if (expirationDate.value.match(/[0-9]{2}\/[0-9]{4}/)) {
            // cvv//////////
            if (cvv.value.match(/[0-9]{3}/)) {
              ////////////////////////////done////////////////////////////////
              doneMsg.style.opacity = "1";
              setTimeout(() => {
                doneMsg.style.opacity = "0";

                setItem(localAddToCartCountedNum, 0);
                setItem(localCartData, null);
                window.location.href = "productsPage.html";
              }, 2000);
              /////////////////////////////////////////////////
            } else {
              alertMsg.innerText = "CVV Invalid";
              alertMsg.style.opacity = "1";
              setTimeout(() => {
                alertMsg.style.opacity = "0";
              }, 2000);
            }
            /////////////////////////////////
          } else {
            alertMsg.innerText = "Expiration Date Invalid";
            alertMsg.style.opacity = "1";
            setTimeout(() => {
              alertMsg.style.opacity = "0";
            }, 2000);
          }
          /////////////////
        } else {
          alertMsg.innerText = "Card Number Invalid";
          alertMsg.style.opacity = "1";
          setTimeout(() => {
            alertMsg.style.opacity = "0";
          }, 2000);
        }
        ///////////
      } else {
        alertMsg.innerText = "Card Name Invalid";
        alertMsg.style.opacity = "1";
        setTimeout(() => {
          alertMsg.style.opacity = "0";
        }, 2000);
      }
    }

    // card numbers validation assest//////////////////

    function cardNumFunc() {
      for (let i = 0; i < cardNumAll.length; i++) {
        if (cardNumAll[i].value.length == 4) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
}
