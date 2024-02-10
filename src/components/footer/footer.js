import { CustomElementLoader } from "./../../utils/customElementLoader.js";

export class FooterComponent extends HTMLElement {
  constructor() {
    super();

    CustomElementLoader.loadComponent(this, "footer");
  }
}
