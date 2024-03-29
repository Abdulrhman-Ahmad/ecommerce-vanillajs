import { Account } from "./components/account/account.js";
import { AddProduct } from "./components/addProduct/addProduct.js";
import { Cart } from "./components/cart/cart.js";
import { ExitMark } from "./components/exitMark/exitMark.js";
import { FooterComponent } from "./components/footer/footer.js";
import { HeaderComponent } from "./components/header/header.js";
import { HomeComponent } from "./components/home/home.js";
import { Login } from "./components/login/login.js";
import { Payment } from "./components/payment/payment.js";
import { ProductDetails } from "./components/productDetails/productDetails.js";
import { Products } from "./components/products/products.js";
import { Register } from "./components/register/register.js";

customElements.define("header-component", HeaderComponent);
customElements.define("footer-component", FooterComponent);
customElements.define("home-component", HomeComponent);
customElements.define("cart-component", Cart);
customElements.define("payment-component", Payment);
customElements.define("login-component", Login);
customElements.define("register-component", Register);
customElements.define("addproduct-component", AddProduct);
customElements.define("account-component", Account);
customElements.define("productdetails-component", ProductDetails);
customElements.define("products-component", Products);
customElements.define("exit-mark", ExitMark);

export {
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
};
