class Person {
    private name: string;
    private age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    printInfo(): void {
        console.log(`name : ${this.name}, age : ${this.age}`);
    }

}

let p = new Person('oyhk', 30);
p.printInfo();

class User {
    constructor(private name: string, private age: number) {
    }

    printInfo(): void {
        console.log(`name : ${this.name}, age : ${this.age}`);
    }
}

let u = new User('oyhk', 30);
u.printInfo();
