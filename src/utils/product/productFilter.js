import { cardCreator } from "./../../utils/product/productCards.js";

export function numberingFilterBadge(obj) {
  // array to count each category
  let categoryArray = [0, 0, 0, 0, 0, 0];

  // looping over the categories of the products and counting each
  // repeated category and set the value on the categoryArray
  for (let element of obj) {
    switch (element.category) {
      // smartphones laptops fragrances skincare groceries home-decoration
      case "smartphones":
        categoryArray[0]++;
        break;

      case "laptops":
        categoryArray[1]++;
        break;

      case "fragrances":
        categoryArray[2]++;
        break;

      case "skincare":
        categoryArray[3]++;
        break;

      case "groceries":
        categoryArray[4]++;
        break;

      case "home-decoration":
        categoryArray[5]++;
        break;

      default:
        console.log("non");
        break;
    }
  }
  setFilterBadgeNum(categoryArray);
}

function setFilterBadgeNum(countedNumArray) {
  let smartphones = document.querySelector("#filterBadge1");
  let laptops = document.querySelector("#filterBadge2");
  let fragrances = document.querySelector("#filterBadge3");
  let skincare = document.querySelector("#filterBadge4");
  let groceries = document.querySelector("#filterBadge5");
  let homeDecoration = document.querySelector("#filterBadge6");

  // using destructuring array assigned each inner http value with its equivalent
  [
    smartphones.innerHTML,
    laptops.innerHTML,
    fragrances.innerHTML,
    skincare.innerHTML,
    groceries.innerHTML,
    homeDecoration.innerHTML,
  ] = countedNumArray;
}

export function setFilter(filters) {
  if (getItem(localFilterChecked) != "0") {
    filters.forEach((filter) => {
      let value = getItem(localFilterChecked);
      if (filter.getAttribute("value") == value) {
        if (getItem(localFilterChecked) != "0") {
          let bodyProductsContainer = document.querySelector("#bodyProducts");
          bodyProductsContainer.innerHTML = "";

          filter.checked = true;
          let event = new Event("click");
          filter.dispatchEvent(event);
          setItem(localFilterChecked, 0);
        }
      }
    });
  }
}

export function showFiltered(arr) {
  let bodyProducts = document.querySelector("#bodyProducts");
  bodyProducts.innerHTML = "";

  for (var index of arr) {
    getObjectByCategory(productsUrl, index);
  }
}

function getObjectByCategory(url, category) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let state = false;

      for (let element of data) {
        if (element.category == category) {
          cardCreator(element);
          state = true;
        }
      }

      if (!state) {
        console.log("Not found");
        // do something here ... write code to execute
      }

      // adding click event to all loaded buttons
      addToCartButtonClickEven();
    });
}
