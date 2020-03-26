const isNumber = (val: any): val is number => {
    return typeof val === 'number';
};

const isString = (val: any): val is number => {
    return typeof val === 'string';
};


const log = (value: any) => {
    if (isNumber(value)) {
        return `your number is ${value}`;
    }
    if (isString(value)) {
        return `your name is ${value}`;
    }
    throw new Error(`exception string or number, got ${value}`);
};

console.log(log(1));
console.log(log("oyhk"));
// log([]);

// union type example

const log1 = (value: number | string) => {
    console.log(value);
};

log1("1");
log1(2);
// log1([]) throw type error