var productsUrl =
  "https://testing-e2f37-default-rtdb.firebaseio.com/products.json";
var usersUrl = "https://testing-e2f37-default-rtdb.firebaseio.com/users.json";
var commentsUrl =
  "https://testing-e2f37-default-rtdb.firebaseio.com/comments.json";

// ===================================== [ Global Variables ] =====================================
var browserBag = "browserBag";

var localPassedProduct = "passedProductId";
var localAddToCartCountedNum = "AddToCartCountedNum";
var localCartData = "cartData";
var localFilterChecked = "filterChecked";
var localCurrentLogged = "currentLoggedId";
var localPassedHref = "PassedHref";
var localTotalPrice = "PassedTotalPrice";
var Admin = 23;

// function getItem(key) {
//   return window.localStorage.getItem(key);
// }

// function setItem(key, value) {
//   window.localStorage.setItem(key, value);
// }

// function initializingFromLocal() {
//   if (getItem(localCartData) == null) {
//     setItem(localCartData, null);
//   }

//   if (getItem(localAddToCartCountedNum) == null) {
//     setItem(localAddToCartCountedNum, "0");
//   }

//   if (getItem(localPassedProduct) == null) {
//     setItem(localPassedProduct, null);
//   }

//   // setting counted num from local to the add to cart badge
//   let addToCartBadge = document.querySelector("#addToCartBadge");
//   addToCartBadge.innerHTML = getItem(localAddToCartCountedNum);
// }

// function passedProductId(value) {
//   window.localStorage.setItem("passedProductId", value);
// }

function guid() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}


import { BrowserBag } from "./browserBag.js"

function initializingFromLocal() {

  if (getItem(browserBag) == null){
    const bag = new BrowserBag();
    data = JSON.stringify(bag);
    setItem(browserBag, )
  }


  if (getItem(localCartData) == null) {
    setItem(localCartData, null);
  }

  if (getItem(localAddToCartCountedNum) == null) {
    setItem(localAddToCartCountedNum, "0");
  }

  if (getItem(localPassedProduct) == null) {
    setItem(localPassedProduct, null);
  }

  // setting counted num from local to the add to cart badge
  let addToCartBadge = document.querySelector("#addToCartBadge");
  addToCartBadge.innerHTML = getItem(localAddToCartCountedNum);
}


function getItem(key) {
  return window.localStorage.getItem(key);
}

function setItem(key, value) {
  window.localStorage.setItem(key, value);
}

function passedProductId(value) {
  window.localStorage.setItem("passedProductId", value);
}