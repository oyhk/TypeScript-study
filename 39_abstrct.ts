abstract class Person {
    name: string;

    abstract sayName(): void;
}

class HK extends Person{
    sayName(): void {
        console.log(`My name is ${this.name}`);
    }
}

let hk = new HK();
hk.name = 'oyhk';
hk.sayName();
