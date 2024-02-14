import { CustomElementLoader } from "./../../utils/utils/customElementLoader.js";
import { createCards, cardCreator } from "./../..//utils/product/productCards.js";
import {
  numberingFilterBadge,
  setFilter,
  showFiltered,
} from "./../..//utils/product/productFilter.js";
import { addToCartButtonClickEvent } from "./../../utils/product/productCardsEvent.js";

export class Products extends HTMLElement {
  constructor() {
    super();
    this.initializeAsync();
  }

  async initializeAsync() {
    await CustomElementLoader.loadComponent(this, "products");
    await this.initialize();
  }

  async initialize() {
    let addToCartBadge = document.querySelector("#addToCartBadge");

    fetch("https://testing-e2f37-default-rtdb.firebaseio.com/products.json")
      .then((res) => res.json())
      .then((data) => {
        initializingFromLocal();
        createCards(data);
        addToCartButtonClickEvent();
        numberingFilterBadge(data);
        setFilter(filters);
      });

    //========================= [ CREATING CARDS ] ========================================================
    let current = new Array();

    let filters = document.querySelectorAll(".form-check .form-check-input");

    filters.forEach((filter) => {
      filter.addEventListener("click", (e) => {
        let value = e.target.getAttribute("value");

        // remove the value of the filter if unchecked
        if (current.length != 0) {
          let repeated = false;

          for (let index of current) {
            if (index == value) {
              let toDelete = current.indexOf(index);
              delete current[toDelete];
              repeated = true;
            }
          }

          if (!repeated) {
            current.push(value);
          }
        } else {
          current.push(value);
        }

        let arr = current.filter((e) => e);
        current = arr;
        // the point you were looking for

        if (current == "") {
          showAll(productsUrl);
        } else {
          showFiltered(current);
        }
      });
    });
  }
}
