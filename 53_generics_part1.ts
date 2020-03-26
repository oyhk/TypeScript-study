function getArray(items: any[]): any[] {
    return [].concat(items);
}

let myNumberArray = getArray([1,2,3,4,5]);
let myNumberArray1 = getArray(['o',1,'y',2]);

console.log(myNumberArray);
console.log(myNumberArray1);

myNumberArray.push(6);
myNumberArray1.push('h',3);

console.log(myNumberArray);
console.log(myNumberArray1);

function getArrayNumber(items: number[]): number[] {
    return [].concat(items);
}

function getArrayString(items: string[]): string[] {
    return [].concat(items);
}