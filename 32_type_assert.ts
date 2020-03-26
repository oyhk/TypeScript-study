let x: any = "My name is oyhk";

// x 可以是任何类型，编译器可能不能明确知道 x 是哪种类型
// <string> 表示把 x 断言成字符串类型，就是告诉编译器要把 x 当成字符串类型，这样就可以使用字符串的函数
console.log((<string>x).substr(0, 6));
console.log(typeof x);

let s = (<string>x);


function getLength(something: string): number {
    return something.length;
}