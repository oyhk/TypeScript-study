let myName: string = 'oyhk';

type Name = string;

let myName1: Name = 'oyhk2';


type User = {
    name: string;
    age: number;
    print():void;
}

const user: User = {
    name: 'oyhk',
    age: 30,
    print(): void {
        console.log(`name:${user.name}, age:${user.age}`);
    }
};
user.print();



interface IUser {
    name: string;
    age: number;
    print():void;
}

class HK implements IUser {
    age: number;
    name: string;

    print():void {
        console.log(`name:${hk.name}, age:${hk.age}`);
    }
}

let hk = new HK();
hk.name = 'oyhk';
hk.age = 27;
hk.print();

