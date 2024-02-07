import { CustomElementLoader } from "/src/utils/customElementLoader.js";
import { LoadCart, CheckButton } from "/src/utils/cart/cartitems.js";
import { ClearCartEvent } from "/src/utils/cart/clearCartEvent.js"
export class Cart extends HTMLElement {
  constructor() {
    super();

    this.initializeAsync();
  }

  async initializeAsync() {
    await CustomElementLoader.loadComponent(this, "cart");
    this.initialize();
  }

  initialize() {

    LoadCart();
    
    ClearCartEvent();
    
    CheckButton();
  }
}
