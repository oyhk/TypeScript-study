//  tsc index.ts 非空检查
//  tsc index.ts --strictNullChecks 严格的空检查
function splitInHalf(value: string | null) {
    let checkString = function () {
        if (value === null || value === undefined) {
            value = 'test';
        }
    };
    checkString();
    // 告诉编译器 str 不能为空
    return value!.substring(0, value!.length / 2);
}

let s: string = splitInHalf('hello');
console.log(s);

let a: string = splitInHalf(null);
console.log(a);