// ===================================== [ Data Base Tools ] =====================================
function UpdateDataBase(url, id, key, value) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data[id][key] = value;

      putData(url, data);
    });
}
function DeleteDataBase(url, id, key) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      delete data[id][key];

      putData(url, data);
    });
}
function updateDataBaseAll(url, key, value) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let element of data) {
        element[key] = value;
      }

      putData(url, data);
    });
}
function deleteDataBaseAll(url, key) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let element of data) {
        delete element[key];
      }

      putData(url, data);
    });
}
function showData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
}
function putData(url, data) {
  data = JSON.stringify(data);

  let option = {
    method: "put",
    body: data,
    header: {
      "content-type": "application/json",
    },
  };

  fetch(url, option);
}
function searchDataBase(url, key) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let state = false;
      for (let element of data) {
        if (element[key] != undefined) {
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
    console.log(data);
  }
}
function getDataBaseById(url, id) {
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
    // =============== [ Fetching Product Price Details ] ===================

    let name = document.querySelector("#productName");
    let brand = document.querySelector("#productBrand");
    let description = document.querySelector("#productDescription");
    let category = document.querySelector("#productCategory");
    let price = document.querySelector("#productPrice");

    name.innerHTML = `<strong>Title:</strong> ${data.title}`;
    brand.innerHTML = `<strong>brand:</strong> ${data.brand}`;
    description.innerHTML = `<strong>description:</strong> ${data.description}`;
    category.innerHTML = `<strong>category:</strong> ${data.category}`;
    price.innerHTML = `price: ${data.price}LE`;

    // ============= [ Fetching product Image ] ===============================

    for (element of data.images) {
      let imageContainer = document.querySelector("#imageSectionDetails");

      let image = document.createElement("img");
      image.setAttribute("class", "img-thumbnail w-50");
      image.setAttribute("src", element);

      imageContainer.appendChild(image);
    }
  }
}

// ===================================== [ Global Variables ] =====================================
var localPassedProduct = "passedProductId";
var localAddToCartCountedNum = "AddToCartCountedNum";
var localCartData = "cartData";
var localFilterChecked = "filterChecked";
var localCurrentLogged = "currentLoggedId";
var localPassedHref = "PassedHref";
var localTotalPrice = "PassedTotalPrice";

var productsUrl =
  "https://testing-e2f37-default-rtdb.firebaseio.com/products.json";
var usersUrl = "https://testing-e2f37-default-rtdb.firebaseio.com/users.json";
var commentsUrl =
  "https://testing-e2f37-default-rtdb.firebaseio.com/comments.json";

function getItem(key) {
  return window.localStorage.getItem(key);
}
function setItem(key, value) {
  window.localStorage.setItem(key, value);
}




