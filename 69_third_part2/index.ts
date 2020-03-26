import * as lodash from 'lodash';

class Person {
    id: number;
    name: string;
}

let p = new Person();
p.id = 1;
p.name = 'oyhk';
console.log(`id : ${p.id}, name : ${p.name}`);


console.log(lodash.reverse([1,2,3]));

console.log(lodash.sum([1,2,3]));


// @types/lodash 是一种TS的声明
// lodash才是真正的代码库