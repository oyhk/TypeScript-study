class Person{
    readonly name: string = 'oyhk';
}

let p1 = new Person();
// p1.name = 'oyhk'; // error TS2540: Cannot assign to 'name' because it is a read-only property.

console.log(p1.name);