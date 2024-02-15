/**
 *  -interfaces
 * -An interface declaration is another way to name an object type:
 *
 *
 */

interface UserX {
  readonly id: number;
  email: string;
  userId: string;
  //   startTrial: () => string;
  startTrial(): string;
}

// duplicating/ adding new field
interface UserX {
  githubLogin: string;
}

//extends another interface
interface Admin extends UserX {
  role: "admin" | "TA" | "student";
}

const efin: Admin = {
  id: 21212,
  email: "efy@gmail.com",
  userId: "21212",
  startTrial: function (): string {
    return "trial commenced";
  },
  githubLogin: "devode",
  role: "admin",
};

console.log(efin);
