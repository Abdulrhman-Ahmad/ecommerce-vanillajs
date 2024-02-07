import { CustomElementLoader } from "/src/utils/customElementLoader.js";


export class HomeComponent extends HTMLElement {
  constructor() {
    super();

    this.initializeAsync()

  }

  async initializeAsync(){
    await CustomElementLoader.loadComponent(this, "home");
    this.initialize()
  }

   initialize(){
    // class data
    let cardsContainer = document.querySelectorAll("#cardsContainer img");
    let buttons = document.querySelectorAll("#cardsContainer button");
    
    console.log('hs')
    
    cardsContainer.forEach((card) =>
      card.addEventListener("click", (e) => {
        e.preventDefault();
        let value = e.target.parentNode.getAttribute("value");
        setItem(localFilterChecked, value);
        window.location.href = "html/productsPage.html";
      })
    );
    
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        let value = e.target.parentNode.getAttribute("value");
        setItem(localFilterChecked, value);
        window.location.href = "html/productsPage.html";
      });
    });
    
    let showAllButton = document.querySelector("#ShowAllProducts");
    
    showAllButton.addEventListener("click", (e) => {
      e.preventDefault();
      let value = e.target.getAttribute("value");
      setItem(localFilterChecked, value);
      window.location.href = "html/productsPage.html";
    });
    }

}


