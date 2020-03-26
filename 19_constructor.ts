class Person {
    firstName; // default visibility public
    lastName;
    private _hobby;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName = (): void => {
        return this.lastName + this.firstName;
    };


    getHobby() {
        return this._hobby;
    }

    setHobby(value) {
        this._hobby = value;
    }

    getPersonHobby() {
        console.log(`${this.getFullName()}  hobby is ${this.getHobby()}.`)
    }
}
