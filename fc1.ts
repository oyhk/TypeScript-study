// 第一种无指定类型
function add(a, b) {
    return a + b;
}

console.log(add("1", 1));
// output 11
console.log(add(1, 1));

// output 2

function add1(a: number, b: number) {
    return a + b;
}

console.log(add1(1, 2));
// output 3

const add2 = (a, b) => {
    return a + b;
};
console.log(add2("1", 2));
//output 12
console.log(add2(1, 2));
// output 3

const add3 = (a: number, b: number) => {
    return a + b;
};
console.log(add3(1, 2));
// output 3

// the following method throw exception, numbers + numbers can not return strings type
// const add4 = (a: number, b: number):string => {
//     return a + b;
// };
// console.log(add3(1, 2));
// output 3
