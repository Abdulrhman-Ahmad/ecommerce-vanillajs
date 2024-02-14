import { CustomElementLoader } from "./../../utils/utils/customElementLoader.js";
import { LoadCart, CheckButton } from "./../../utils/cart/cartitems.js";
import { ClearCartEvent } from "./../../utils/cart/clearCartEvent.js"
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
