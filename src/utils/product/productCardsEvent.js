export function addToCartButtonClickEvent() {
  let card = document.querySelectorAll(".card");
  // Open the clicked card with setting its value on the localStorage
  card.forEach((c) => {
    c.addEventListener("click", (e) => {
      e.preventDefault();
      let id = e.target.getAttribute("value");
      setItem(localPassedProduct, e.target.getAttribute("value"));
      window.open("productDetailPage.html", "_self");
    });
  });


  document.querySelectorAll(".card a").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      let dataStore = new Array();

      if (getItem(localCartData) == "null") {
        dataStore = [e.target.getAttribute("value")];
        setItem(localCartData, dataStore);

        setItem(
          localAddToCartCountedNum,
          getItem(localCartData).split(",").length
        );
        initializingFromLocal();
      } else {
        dataStore = getItem(localCartData).split(",");
        let repeated = false;

        // check if the element is repeated
        for (let element of dataStore) {
          if (element == e.target.getAttribute("value")) {
            repeated = true;
          }
        }

        // if not repeated push the value to the local storage
        if (!repeated) {
          dataStore.push(e.target.getAttribute("value"));
          setItem(localCartData, dataStore);

          setItem(
            localAddToCartCountedNum,
            getItem(localCartData).split(",").length
          );
          initializingFromLocal();
        }
      }

      // addToCartBadge.innerHTML = `${++addToCartBadgeCounter}`;
      // window.localStorage.setItem(localAddToCartCountedNum, `${addToCartBadgeCounter}`)
    })
  );
}
