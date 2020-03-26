interface IPerson {
    readonly name: string;
    hears?: number[];
}

class HK implements IPerson {
    readonly name: string;
    hears: number[];
}

let hk = new HK();
// hk.name = 'oyhk'; // error TS2540: Cannot assign to 'name' because it is a read-only property.
hk.hears = [1, 2, 3, 4, 5];

