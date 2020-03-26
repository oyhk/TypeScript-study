function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length
    }
    return something.toString().length;

}

console.log(getLength("oyhk"));
console.log(getLength(1111));


interface IPerson {
    name: string;
    age: number;
}

// 这样在TS中是不允许的，需要添加类型断言
// let hk = {};
// hk.name = 'oyhk';
// hk.age = 30;

// 第一种方式
let hk = {} as IPerson;
hk.name = 'oyhk';
hk.age = 30;

// 第二种方式
let miki = <IPerson>{
    name: 'miki',
    age: 29,
};

// 跟以前接口比较像的写法
let dk: IPerson = {
    name: 'dk',
    age: 32
};