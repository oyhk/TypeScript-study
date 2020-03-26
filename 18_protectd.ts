class Person {
    firstName; // default visibility public
    lastName;
    private _hobby;
    protected  food;

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

let p1 = new Person('hk', 'oy');
console.log(p1.getFullName());

let p2 = new Person('dongqin', 'zhang');
p2.setHobby('playing basketball');
p2.getPersonHobby();

class Programmer extends Person {

}

let p3 = new Programmer('dk','long');
// p3.food = 1; //Property 'food' is protected and only accessible within class 'Person' and its subclasses.
