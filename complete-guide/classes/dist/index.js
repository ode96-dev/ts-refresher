"use strict";
class User {
    /* "private" makes it accessible only in this class */
    constructor(email, name) {
        /* private methods exists too */
        //   private _courseCount: number = 1;
        /* will be accessed in this class and any other class that inherits this class */
        this._courseCount = 1;
        /* "private" makes it accessible only in this class...usually done in the constructor */
        /* private methods exists too */
        this.city = "new jersey";
        this.email = email;
        this.name = name;
    }
    /* Getters / Setters, accessors */
    get appleId() {
        return `apple${this.email}`;
    }
    get courseCounter() {
        return this._courseCount;
    }
    //no annotations
    set courseCount(courseNum) {
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
    constructor() {
        super(...arguments);
        this.isFamiliar = false;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
