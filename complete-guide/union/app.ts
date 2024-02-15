/**
 * UNION TYPE
 * helps to avoid the "any" menace
 * */

let score: number | string;
console.log((score = 55));
console.log((score = "scoring"));

type User = {
  id: string;
  name: string;
};

type Admin = {
  id: string;
  username: string;
};

let developer: User | Admin = { name: "Dev Ode", id: "1dfsdfsdfasdas2" };

console.log(developer);

developer = { username: "dev", id: "31211asdasd" };
console.log(developer);

/* 
+unions in arrays
 */

const data: (number | string | boolean)[] = [1, 2, 4, "s", true];
