export class DatabaseTools {
  static UpdateDataBase(url, id, key, value) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data[id][key] = value;
        putData(url, data);
      });
  }
  static DeleteDataBase(url, id, key) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        delete data[id][key];

        putData(url, data);
      });
  }
  static updateDataBaseAll(url, key, value) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        for (let element of data) {
          element[key] = value;
        }

        putData(url, data);
      });
  }
  static deleteDataBaseAll(url, key) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        for (let element of data) {
          delete element[key];
        }

        putData(url, data);
      });
  }
  static showData(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  static putData(url, data) {
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
  static searchDataBase(url, key) {
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

    execute(data);
  }
  static getDataBaseById(url, id) {
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

    execute(data);
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
