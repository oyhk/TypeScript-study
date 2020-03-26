function sum(x: number, y: number): void;
function sum(x: number, y: number, z: number): void;


function sum(x: number, y: number, more?: number): void {
    if (more) {
        console.log(x + y + more);
    } else {
        console.log(x + y);
    }
}

sum(1, 2);
sum(1, 2, 3);


class Person {
    name: string;
    age: number;

    printInfo(name: string): void;
    printInfo(name: string, age: number): void;

    printInfo(name: string, age?: number): void {
        if (age) {
            console.log(`name : ${name}, age : ${age}`);
        } else {
            console.log(`name : ${name}`);
        }
    }
}

let p = new Person();
p.name = 'oyhk';
p.age = 30;
p.printInfo(p.name);
p.printInfo(p.name, p.age);