/* arrays */

//giving type never, rem?
//will not be able to push values
//must explicitly, specify type
// const superHeroes = [];
const superHeroes: string[] = [];
const superHeroPowerScale: number[] = [];

superHeroes.push("Superman", "Catman", "Dodger", "Bullet");

console.log(superHeroes);

type User = {
  name: string;
  isAdmin: boolean;
};

const allUsers: User[] = [];
allUsers.push(
  { name: "admin", isAdmin: true },
  { name: "reg user", isAdmin: false }
);

console.log(allUsers);

const complexArray: number[][] = [
  [24400, 121912],
  [-30, 3.4],
];
console.log(complexArray);
