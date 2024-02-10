export function ClearCartEvent() {
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
}

function getStoredData() {
  if (getItem(localCartData) == 'null') 
  return;

  let dataStore = getItem(localCartData).split(",");
  for (let item of dataStore) {
    getCartDataBaseById(productsUrl, parseInt(item));
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
