/* 
- argument must be explicitly annotated
- function too, if it returns something
- for functions, ts does infers, but it is also good to do it explicitly
 */

function addTwo(number: number): number {
  return number + 2;
}

const res1 = addTwo(4);
console.log(res1);

function addThree(
  number: number,
  teacher: string = "mathematician"
): number | string {
  return `${teacher} got ${number + 2}`;
}

const res2 = addThree(4, "developer");
console.log(res2);

/* function is not returning anything */
function logger(message: string): void {
  console.log(message);
}

/* function handling errors, never return a value...e.g. errors */
function handleError(message: string): never {
  throw message;
}
