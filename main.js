import {
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  Cart,
  Payment,
  Login,
  Register,
  AddProduct,
  Account,
  ProductDetails,
  Products,
  ExitMark,
} from "/src/customElementRegistery.js";

import { handleNavigation } from "/src/customElementRouting.js"


window.addEventListener("hashchange", handleNavigation);
