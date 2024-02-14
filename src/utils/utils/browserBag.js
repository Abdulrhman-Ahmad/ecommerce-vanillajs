export class BrowserBag {
  localCurrentLogged;
  localPassedProduct;
  localAddToCartCountedNum;
  localPassedHref;
  localTotalPrice;
  localCartData;
  localFilterChecked;

  constructor() {
    localCurrentLogged = null;
    localPassedProduct = 0;
    localAddToCartCountedNum = 0;
    localPassedHref = "";
    localTotalPrice = 0;
    localCartData = [null];
    localFilterChecked = [null];
  }
}
