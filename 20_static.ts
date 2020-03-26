class Person {
    private constructor() {

    }
}

// let p1 = new Person(); // TS2673: Constructor of class 'Person' is private and only accessible within the class declaration.

class Person1 {
    constructor() {

    }

    static age = 10;

    static getAge(){
        return Person1.age;
    }
}

console.log(Person1.age);
console.log(Person1.getAge());