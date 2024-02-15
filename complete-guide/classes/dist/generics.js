"use strict";
/* //TODO:generics */
const score = [];
const scorers = [];
//does not exactly have to be Type, you can use any letter, word but must be the same across
function game(val) {
    return val;
}
game("3");
// game<Bottle>({
//   brand: 1300,
//   type: "gym",
// });
const products = ["books", "stickers", "guns", "ball"];
//regular func
function getSearchProducts(products) {
    return products[3];
}
//arrow function
const getSearchProductA = (products) => products[4];
class Syllaboo {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
