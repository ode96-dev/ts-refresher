/**
 *  objects in ts
 * In JavaScript, the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.
 * - use case is through the functions
 * -type alias/interface come handy
 * -Object literals get special treatment and undergo excess property checking when assigning them to other variables,
 * or returned through the function */

// const User = {
//   name: "Dev Ode",
//   email: "dev@dev.com",
//   isActive: true,
// };

//type alias, unlike above, we will define types rather than the values

type User = {
  readonly _uid: string; //cannot be changed
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: string; //optional
};

function createUser(user: User): User {
  return {
    _uid: user._uid,
    name: user.name,
    email: user.email,
    isActive: user.isActive,
  };
}

const funcRes1 = createUser({
  _uid: "user.uid",
  name: "John",
  email: "james@gmail.com",
  isActive: true,
});
console.log((funcRes1.email = "somethign@gmail.com"));
console.log((funcRes1.name = "Dev Ode"));
//you will not be allowed to change
// console.log((funcRes1._uid = "12112"));
console.log((funcRes1.isActive = false));
console.log(
  (funcRes1.creditCardDetails =
    "lorem ipsum dolor sit amet, consectetur adipiscing")
);
console.log(funcRes1);

//Intersection Types, mix and match
type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cardOwner: string;
    cvv: string;
  };
