import { CustomElementLoader } from "./../../utils/utils/customElementLoader.js";
export class ProductDetails extends HTMLElement {
  constructor() {
    super();

    this.initializeAsync();
  }

  async initializeAsync() {
    await CustomElementLoader.loadComponent(this, "productDetails");
    this.initialize();
  }

  initialize() {
    // Load the the product that have been clicked.

    getDataBaseById(productsUrl, getItem(localPassedProduct));

    // load comments to the page
    function PlaceComments(url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          for (let obj of data) {
            createComment(obj);
          }
        });
    }

    // Creating elements and append it on the comment body
    function createComment(obj) {
      let commentContainer = document.querySelector("#commentContainer");

      let listItem = document.createElement("li");
      listItem.setAttribute("class", "list-group-item d-flex flex-wrap");

      let profileContainer = document.createElement("div");
      profileContainer.setAttribute(
        "class",
        "col-12 fs-4 d-flex align-items-center justify-content-start"
      );
      profileContainer.setAttribute("id", "commentProfile");

      let commentImage = document.createElement("img");
      commentImage.setAttribute(
        "src",
        `https://picsum.photos/50/${50 + parseInt(obj.id)}`
      );
      commentImage.setAttribute("id", "commentProfileImage");

      let commentName = document.createElement("div");
      commentName.setAttribute("class", "fs-4");
      commentName.setAttribute("id", "commentName");
      commentName.innerHTML = obj.username;

      let commentText = document.createElement("div");
      commentText.setAttribute("class", "col-12");
      commentText.innerHTML = obj.body;

      profileContainer.appendChild(commentImage);
      profileContainer.appendChild(commentName);

      listItem.appendChild(profileContainer);
      listItem.appendChild(commentText);

      commentContainer.appendChild(listItem);
    }
    PlaceComments(commentsUrl);

    let addToCartButton = document.querySelector("#cartPriceDetails a");
    addToCartButton.setAttribute("value", getItem(localPassedProduct));

    addToCartButton.addEventListener("click", (e) => {
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

      initializingFromLocal();
    });

    // ---------------------------------------------------------------------------------
  }
}
