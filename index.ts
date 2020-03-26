// 03
let fn = () => 'response';
// 04
let a: number;
a = 10;

let b: string;
b = "oyhk";

let c: number[];
c = [1];

const d: number = 1;
// 05
// var 作用域
if (true) {
    var i = 0;
}
console.log("05 --这里是跨了 if 语句 i = ", i);

// var 允许重新定义变量
var my_name: string = "rails365";
console.log(`my name is ${my_name}`);
var my_name: string = "python110";
console.log(`my name is ${my_name}`);

// let 不允许重新定义变量
let your_name: string = "rails365";
console.log(`my name is ${your_name}`);
// 这里会报错  Cannot redeclare block-scoped variable 'your_name'
// let your_name: string = "python110";
console.log(`my name is ${your_name}`);

