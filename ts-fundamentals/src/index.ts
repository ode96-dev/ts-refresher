/**
 * ANNOTATION
 * - typescript compiler can infer the types
 *
 * BUILD IN TYPES
 * 1. number
 * 2. string
 * 3. boolean
 * 4. null
 * 5. undefined
 * 6. object
 * 7. any
 * 8. unknown
 * 9. never
 * 10. enum
 * 11. tuple
 */

//types
let sales: number = 1212121313;
let course: string = "Typescript";
let is_published: boolean = false;

//the any type
//must be used sparingly and should be avoided as much as possible
let level;

/* Arrays */
let numbers = [1, 2, "Dev", false]; //this accepts numbers,strings, boolean
let numbers2: number[] = [1, 2]; //explicitly accepts numbers, one type

/* Tuples
- must match
- internally they are represented as js arrays
 */
let user: [number, string] = [1, "Dev"];

/* ENUMS
- use PascalCase
 */

const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;

/* Functions
- should always annotate our functions
- you can make arguments optional (give it a default value)
 */
function calcTax(income: number, taxYear: number = 2023): number {
  if (taxYear < 2023) {
    return income * 0.16;
  }
  return income * 0.8;
}
calcTax(25_000);

/* Type Aliases */
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Dev",
  retire: (date: Date) => console.log(date),
};

/* Union Types */
function kgsToLbs(weight: number | string) {
  //narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgsToLbs(10);
kgsToLbs("10kg");

/* Intersection types */
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

/* Literal Types */
type Qty = 50 | 100;
let qty: Qty = 100;

/* nullable types */
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toLowerCase());
  } else {
    console.log("greetings");
  }
}

greet(null);

/* optional chaining */
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday);

/* The Nullish Coaelscing Operator */
let speed: number | null = null;
let ride = {
  speed: speed ?? 30,
};

/* type assetions */
// let phone = document.getElementById("phone");
let phone = document.getElementById("phone") as HTMLInputElement;
phone.value;

/* unknown type */
function render(document: unknown) {
  return document;
}

/* never type, value that never occur */
//can be used to handle unreachable code
function processThings(): never {
  while (true) {}
}
/* 
object oriented programming
- classes
- constructors
- properties and methods
- access control keywords
- getters and setters
- static members
- index signatures
- inheritance
- polymorphism
- abstract classes
- interfaces
 */
