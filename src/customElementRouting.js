const routes = {
  "": "home-component",
  "#home": "home-component",
  "#cart": "cart-component",
  "#login": "login-component",
  "#register": "register-component",
  "#addproduct": "addproduct-component",
  "#account": "account-component",
  "#payment": "payment-component",
  "#productdetails": "productdetails-component",
  "#products": "products-component",
  "#exit-mark": "exit-mark-component",
};

function navigateTO(route) {
  const component = document.createElement(routes[route]);
  const container = document.getElementById("app");
  container.innerHTML = "";
  container.appendChild(component);
}

export function handleNavigation() {
  const path = window.location.hash;
  navigateTO(path);
}

handleNavigation()
