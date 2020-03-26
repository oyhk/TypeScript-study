interface IPerson {
    name: string;
    age?: number;

    sayName(): void;

    sayAge?(): void;
}

class DK implements IPerson {
    name: string;
    age: number;

    sayName(): void {
        console.log(`My name is ${this.name}.`);
    }
}

let dk = new DK();
dk.name = 'DK';
dk.sayName();

class HK implements IPerson {
    name: string;

    sayName(): void {
        console.log(`My name is ${this.name}.`);
    }
}

let hk = new HK();
hk.name = 'HK';
hk.sayName();

let hk1: IPerson = new HK();
hk1.name = 'HK1';
hk1.sayName();

// type assert
console.log({
    sayName: () => {
    }
} as IPerson);
console.log({age: 27} as IPerson);
console.log({name: 'oyhk', age: 27} as IPerson);
