class User {
  /* private methods exists too */
  //   private _courseCount: number = 1;

  /* will be accessed in this class and any other class that inherits this class */
  protected _courseCount: number = 1;
  email: string;
  name: string;
  /* "private" makes it accessible only in this class...usually done in the constructor */
  /* private methods exists too */
  private city: string = "new jersey";

  /* "private" makes it accessible only in this class */

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }

  /* Getters / Setters, accessors */
  get appleId(): string {
    return `apple${this.email}`;
  }

  get courseCounter(): number {
    return this._courseCount;
  }

  //no annotations
  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("course not found");
    }
    this._courseCount = courseNum;
  }
}

const efin = new User("akademiks@akademiks.com", "akademiks");

console.log(efin);

/* inheritance */
class SubUser extends User {
  isFamiliar: boolean = false;
  changeCourseCount() {
    this._courseCount = 4;
  }
}
