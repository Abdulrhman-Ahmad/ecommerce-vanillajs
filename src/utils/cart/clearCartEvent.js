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
