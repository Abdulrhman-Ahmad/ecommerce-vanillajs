import { CustomElementLoader } from "/src/utils/customElementLoader.js";

export class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    CustomElementLoader.loadComponent(this, "header");
  }
}
