"use strict";
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
let sales = 1212121313;
let course = "Typescript";
let is_published = false;
//the any type
//must be used sparingly and should be avoided as much as possible
let level;
/* Arrays */
let numbers = [1, 2, "Dev", false]; //this accepts numbers,strings, boolean
let numbers2 = [1, 2]; //explicitly accepts numbers, one type
/* Tuples
- must match
- internally they are represented as js arrays
 */
let user = [1, "Dev"];
let mySize = 2 /* Size.Medium */;
/* Functions
- should always annotate our functions
- you can make arguments optional (give it a default value)
 */
function calcTax(income, taxYear = 2023) {
    if (taxYear < 2023) {
        return income * 0.16;
    }
    return income * 0.8;
}
calcTax(25000);
let employee = {
    id: 1,
    name: "Dev",
    retire: (date) => console.log(date),
};
/* Union Types */
function kgsToLbs(weight) {
    //narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgsToLbs(10);
kgsToLbs("10kg");
