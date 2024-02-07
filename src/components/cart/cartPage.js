
// =====================================================================================================================================================

let totalPrice = document.querySelector("#totalPrice");

var TotalAmount = null;

// clear the add to cart badge when clicked
let clearCart = document.querySelector("#clearCartButton");
clearCart.addEventListener("click", (e) => {
  setItem(localAddToCartCountedNum, "0");
  setItem(localCartData, null);
  let cartProductContainer = document.querySelector("#cartProductsContainer");
  cartProductContainer.innerHTML = "";
  setItem(localCartData, null);
  getStoredData();
  totalPrice.innerHTML = "Total Price: 0LE";

  // I'mHere
  let addToCartBadge = document.querySelector("#addToCartBadge");
  addToCartBadge.innerHTML = getItem(localAddToCartCountedNum);
});

getStoredData();

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
    });

  function execute(data) {
    if (TotalAmount == null) {
      TotalAmount = 0;
    }
    createCartProduct(data);
    TotalAmount = TotalAmount + data.price;
    totalPrice.innerHTML = `Total Price: ${TotalAmount}LE`;
  }
}

function createCartProduct(obj) {
  let cartProductContainer = document.querySelector("#cartProductsContainer");

  let mainContainer = document.createElement("div");
  mainContainer.setAttribute("class", "card mb-3 w-100");

  let secondContainer = document.createElement("div");
  secondContainer.setAttribute("class", "row g-0 justify-content-between");

  let imageContainer = document.createElement("div");
  imageContainer.setAttribute(
    "class",
    "col-md-3 d-flex justify-content-start align-items-center"
  );

  let image = document.createElement("img");
  image.setAttribute("class", "img-fluid rounded-start");
  image.setAttribute("src", `${obj.images[0]}`);

  let thirdContainer = document.createElement("div");
  thirdContainer.setAttribute("class", "col-md-8");

  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  let cartTitle = document.createElement("div");
  cartTitle.setAttribute("class", "card-title");
  cartTitle.innerHTML = `<strong>Product Name:</strong> ${obj.title}`;

  let cardText = document.createElement("p");
  cardText.setAttribute("class", "card-text");
  cardText.innerHTML = `<strong>Description:</strong> ${obj.description}`;

  let price = document.createElement("h4");
  price.setAttribute("class", "card-title");
  price.innerHTML = `<strong>Price: ${obj.price}</strong>`;

  let xMarkHolder = document.createElement("div");
  xMarkHolder.setAttribute(
    "class",
    "col-1 d-flex justify-content-center align-items-center"
  );

  let xMark = document.createElement("div");
  xMark.setAttribute("class", "col-1 fs-4 h-25 w-25 XMark");
  xMark.setAttribute("id", "cartXMark");
  xMark.setAttribute("value", obj.id);
  xMark.innerHTML = "X";

  cardBody.appendChild(cartTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(price);

  thirdContainer.appendChild(cardBody);

  imageContainer.appendChild(image);

  xMarkHolder.appendChild(xMark);

  secondContainer.appendChild(imageContainer);
  secondContainer.appendChild(thirdContainer);
  secondContainer.appendChild(xMarkHolder);

  mainContainer.appendChild(secondContainer);

  cartProductContainer.appendChild(mainContainer);

  eventsForXMark(mainContainer);
}

// ----------- [ Check Button ] --------------------
let checkoutButton = document.querySelector("#checkOutButton");
checkoutButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentId == "0" || !getItem(localCurrentLogged)) {
    let currentUrl = window.location.href;
    setItem(localPassedHref, currentUrl);
    window.location.href = "signInPage.html";
  } else {
    if (getItem(localCartData) == "null" || getItem(localCartData) == '' ) {
      console.log("Empty Cart");
    } else {
      setItem(localTotalPrice, TotalAmount);
      window.location.href = "paymentPage.html";
    }
  }
});

function eventsForXMark(element) {
  element.addEventListener("click", (e) => {
    let value = e.target.getAttribute("value") - 1;

    let cartData = getItem(localCartData).split(",");

    let counted = getItem(localAddToCartCountedNum);
    setItem(localAddToCartCountedNum, --counted);

    for (let i of cartData) {
      if (i == value) {
        let indexOfTheElement = cartData.indexOf(i);
        cartData.splice(indexOfTheElement, 1);
        setItem(localCartData, cartData);
        let url = window.location.href;
        window.location.href = url;
      }
    }
  });
}
