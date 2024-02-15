"use strict";
/**
 * abstract classes
 * */
class TakeDrink {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Person extends TakeDrink {
    getCab() {
        console.log("drunk. get cab");
    }
    constructor(name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
    }
}
const legalAge = new Person("livingstonre", 30);
console.log(legalAge);
