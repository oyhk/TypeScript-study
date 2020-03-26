class Person {
    private _name: string;
    private _age: number;


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    printInfo(): void {
        console.log(`name : ${this._name}, age : ${this._age}`);
    }




}

let p = new Person();
p.name('oyhk');
p.age(30);
p.printInfo();