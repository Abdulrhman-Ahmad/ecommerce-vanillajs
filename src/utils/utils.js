export class Utils {
   
    static #localPassedProduct = 'passedProductId';
    static #localAddToCartCountedNum = 'AddToCartCountedNum';
    static #localCartData = 'cartData';
    static #localFilterChecked = 'filterChecked';
    static #localCurrentLogged = 'currentLoggedId';
    static #localPassedHref = 'PassedHref';
    static #localTotalPrice = 'PassedTotalPrice';
  
    static getItem(key) {
        return window.localStorage.getItem(key);
    }
  
    static setItem(key, value) {
        window.localStorage.setItem(key, value);
    }
  
    static initializingFromLocal() {
        // Your initialization code here
    }
  
    // Other shared variables and functions
  
    static get localPassedProduct() {
        return SharedData.#localPassedProduct;
    }
  
    static get localAddToCartCountedNum() {
        return SharedData.#localAddToCartCountedNum;
    }
  
    // Get Url
    static get productsUrl() {
      return "https://testing-e2f37-default-rtdb.firebaseio.com/products.json";
    }
    static get usersUrl() {
      return "https://testing-e2f37-default-rtdb.firebaseio.com/users.json";
    }
    static get commentsUrl() {
      return "https://testing-e2f37-default-rtdb.firebaseio.com/comments.json";
    }


}