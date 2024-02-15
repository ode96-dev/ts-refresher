/**
 * abstract classes
 * */
abstract class TakeDrink {
  constructor(public name: string, public age: number) {}

  abstract getCab(): void;
}

class Person extends TakeDrink {
  getCab(): void {
    console.log("drunk. get cab");
  }
  constructor(public name: string, public age: number) {
    super(name, age);
  }
}

const legalAge = new Person("livingstonre", 30);
console.log(legalAge);
