class BrowserBag {
  localCurrentLogged;
  localPassedProduct;
  localAddToCartCountedNum;
  localPassedHref;
  localTotalPrice;
  localCartData;
  localFilterChecked;

  constructor() {
    localCurrentLogged = 0;
    localPassedProduct = 0;
    localAddToCartCountedNum = 0;
    localPassedHref = "";
    localTotalPrice = 0;
    localCartData = [null];
    localFilterChecked = [null];
  }
}
