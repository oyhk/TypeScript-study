interface IPerson {
    name: string;

    sayName(): void;
}

class Miki implements IPerson {
    name: string;

    sayName(): void {
        console.log(`My name is ${this.name}.`);
    }
}

let miki = new Miki();
miki.name = 'Miki';
miki.sayName();

class HK implements IPerson{
    name: string;

    sayName(): void {
        console.log(`My name is ${this.name}.`);
    }
}

let hk = new HK();
hk.name = 'HK';
hk.sayName();

let hk1:IPerson = new HK();
hk1.name = 'HK1';
hk1.sayName();