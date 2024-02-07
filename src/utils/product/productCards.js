export function createCards(data) {
  for (let element of data) {
    cardCreator(element);
  }
}

export function cardCreator(obj) {
  let bodyProductsContainer = document.querySelector("#bodyProducts");

  let cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "card m-1 mt-4");
  cardContainer.setAttribute("value", `${obj.id - 1}`);
  cardContainer.style.width = "18rem";

  let imagHolder = document.createElement("div");
  imagHolder.setAttribute("class", "text-center card-img-top");
  imagHolder.setAttribute("id", "img");

  let cardImage = document.createElement("img");
  cardImage.setAttribute("class", "img-fluid");
  cardImage.setAttribute("src", obj.thumbnail);
  cardImage.setAttribute("value", `${obj.id - 1}`);

  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body align-itmes-space-between");
  cardBody.setAttribute("value", `${obj.id - 1}`);

  let cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.setAttribute("value", `${obj.id - 1}`);
  cardTitle.innerHTML = `${obj.title}`;

  let cardDescription = document.createElement("p");
  cardDescription.setAttribute("class", "card-text");
  cardDescription.setAttribute("value", `${obj.id - 1}`);
  cardDescription.innerHTML = `${obj.description}`;

  let cardPrice = document.createElement("h6");
  cardPrice.setAttribute("class", "card-title");
  cardPrice.innerHTML = `${obj.price}LE`;
  cardPrice.setAttribute("value", `${obj.id - 1}`);

  let addToCartBtn = document.createElement("a");
  addToCartBtn.setAttribute("class", "btn btn-primary");
  addToCartBtn.setAttribute("value", `${obj.id - 1}`);
  addToCartBtn.innerHTML = `<i value="${
    obj.id - 1
  }" class="fa-solid fa-cart-shopping" style="color: white;"></i></i> Add To Cart`;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardDescription);
  cardBody.appendChild(cardPrice);
  cardBody.appendChild(addToCartBtn);

  imagHolder.appendChild(cardImage);
  cardContainer.appendChild(imagHolder);
  cardContainer.appendChild(cardBody);

  bodyProductsContainer.appendChild(cardContainer);
}
