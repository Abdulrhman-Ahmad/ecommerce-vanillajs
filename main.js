import { Account } from "/src/components/account/account.js";
import { AddProduct } from "/src/components/addProduct/addProduct.js";
import { Cart } from "/src/components/cart/cart.js"
import { ExitMark } from "/src/components/exitMark/exitMark.js";
import { FooterComponent } from "/src/components/footer/footer.js";
import { HeaderComponent } from "/src/components/header/header.js";
import { HomeComponent } from "/src/components/home/home.js";
import { Login } from "/src/components/login/login.js";
import { Payment } from "/src/components/payment/payment.js";
import { ProductDetails } from "/src/components/productDetails/productDetails.js";
import { Products } from "/src/components/products/products.js";
import { Register } from "/src/components/register/register.js";

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
