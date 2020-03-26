class Person {
    firstName;
    lastName;

    getFullName = () => {
        console.log(this.lastName + this.firstName);
    };
}

let p = new Person();
p.firstName = 'hk';
p.lastName = 'oy';

p.getFullName();

class Movie {
    name: string;
    play_count: number;
    created_at: string;
    time: string;
}

let m = new Movie();

m.name = "诱人的 TypeScript 视频教程 #11 函数 - Rest Parameters";
console.log(m.name);