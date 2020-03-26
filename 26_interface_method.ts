interface IPerson {
    name: string;

    sayName(): void;
}

class HK implements IPerson {

    constructor(name: string) {
        this.name = name;
    }

    name: string;

    sayName(): void {
        console.log(this.name);
    }
}

const sayName = (o: IPerson) => {
    console.log(o.name);
};


let hk = new HK('oyhk');
hk.sayName();

sayName(hk);