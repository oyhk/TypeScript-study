class Person {
    firstName;
    lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName = () => {
        console.log(this.lastName + this.firstName);
    };
}

class Programmer extends Person {
    happy() {
        console.log(this.lastName + this.firstName + 'vary happy');
    }
}

let p1 = new Programmer("hk", "oy");
p1.getFullName();
p1.happy();

let p2: Person = new Programmer("miki", 'zhang');
// p2.happy(); // Property 'happy' does not exist on type 'Person'.
p2.getFullName();

let p3: Programmer = new Programmer("hk","fuck");
p3.happy();

// let p4: Programmer = new Person("hk","fuck");// 'happy' is declared here.
// p4.happy();