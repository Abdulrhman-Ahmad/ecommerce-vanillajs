import { CustomElementLoader } from "/src/utils/customElementLoader.js";
export class AddProduct extends HTMLElement {
  constructor() {
    super();

    this.initializeAsync();
  }

  async initializeAsync() {
    await CustomElementLoader.LoacComponent(this, "addProduct");
    this.initialize();
  }

  initialize() {
    window.addEventListener("load", (e) => {
      let value = getItem(localCurrentLogged);

      if (value != Admin) {
        window.location.href = "productsPage.html";
      }
    });

    let confirmButton = document.querySelector("#confirmButton");
    let form = document.querySelector("#mainForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let productNameInput = document.querySelector("#orderTitle").value;
      let productBrandInput = document.querySelector("#orderBrand").value;
      let productDescriptionInput =
        document.querySelector("#orderDescription").value;
      let productPriceInput = document.querySelector("#orderPrice").value;
      let productCategory = document.querySelector("#selectCategory");
      let CategoryValue = productCategory.value;
      let img1Input = document.querySelector("#orderImg1").value;
      let img2Input = document.querySelector("#orderImg2").value;
      let img3Input = document.querySelector("#orderImg3").value;
      let mainImg = document.querySelector("#orderMainImg").value;

      console.log("Im here");

      fetch(productsUrl)
        .then((res) => res.json())
        .then((data) => {
          let totalLength = data.length;
          let id = parseInt(totalLength) + 1;
          let productData = {
            id: id,
            title: `${productNameInput}`,
            brand: `${productBrandInput}`,
            category: `${CategoryValue}`,
            description: `${productDescriptionInput}`,
            thumbnail: `${mainImg}`,
            images: [img1Input, img2Input, img3Input],
            price: productPriceInput,
          };

          data[totalLength] = productData;

          putData(productsUrl, data);
        });
    });

    showData(productsUrl);

    // function storeProductData()
    // {
    //     fetch('https://testing-e2f37-default-rtdb.firebaseio.com/products.json')
    //     .then(res => res.json())
    //     .then(data=> {

    //         let totalLength = data.length;
    //         let id = parseInt(totalLength) + 1;

    //         let productData = {
    //             'id':        `${id}`,
    //             'title':     `${productNameInput.value}`,
    //             'brand':     `${orderBrandInput.value}`,
    //             'category':  `${orderCategory.value}`,
    //             'description':`${orderDescriptionInput.innerHTML}`,
    //             'thumbnail': `${mainImg.innerHTML}`,
    //             'images':  `${img1Input.innerHTML,img2Input.innerHTML,img3Input.innerHTML}`
    //         };

    //         data[totalLength] = productData;
    //         // setItem(localCurrentLogged, id);
    //         putData(productsUrl,data);

    // });
    // }
  }
}
