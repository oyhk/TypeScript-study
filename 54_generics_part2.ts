function getArray(items: any[]): any[] {
    return [].concat(items);
}

let myNumberArray = getArray([1, 2, 3, 4, 5]);
let myNumberArray1 = getArray(['o', 1, 'y', 2]);

console.log(myNumberArray);
console.log(myNumberArray1);

myNumberArray.push(6);
myNumberArray1.push('h', 3);

console.log(myNumberArray);
console.log(myNumberArray1);

function getArrayNumber(items: number[]): number[] {
    return [].concat(items);
}

function getArrayString(items: string[]): string[] {
    return [].concat(items);
}

// 下面开始使用泛型

function getArrayGenerics<T>(items: T[]): T[] {
    return [].concat(items);
}

let myNumArrayGenerics = getArrayGenerics<number>([1,2,3,4]);
console.log(myNumArrayGenerics);
let myStrArrayGenerics = getArrayGenerics<string>(['o','y','h']);
console.log(myStrArrayGenerics);
myStrArrayGenerics.push('k');
console.log(myStrArrayGenerics);
