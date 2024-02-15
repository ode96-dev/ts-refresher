/* //TODO:generics */
const score: Array<number> = [];
const scorers: Array<string> = [];

//does not exactly have to be Type, you can use any letter, word but must be the same across
function game<Type>(val: Type): Type {
  return val;
}
game("3");
// function game<Dev>(val: Dev): Dev {
//     return val;
//   }
// function game<T>(val: T): T {
//     return val;
//   }

interface Bottle {
  brand: number;
  type: string;
}
// game<Bottle>({
//   brand: 1300,
//   type: "gym",
// });

const products = ["books", "stickers", "guns", "ball"];

//regular func
function getSearchProducts<T>(products: T[]): T {
  return products[3];
}

//arrow function
const getSearchProductA = <T>(products: T[]): T => products[4];

//another example
interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Syllaboo<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
