// Any is an arbitrary type, so use caution in the case!

let a: any;
a = 1;
a = "1";
a = [1, 2, 3, 4, 5];


const log = (value: any) => {
    if(typeof value === 'number'){
        return `your number is ${value}`;
    }
    if(typeof value === 'string'){
        return `your name is ${value}`;
    }
    throw new Error(`exception string or number, got ${value}`);
};

log(1);// right
log("1");// right

log([1,2]);//  throw new Error("exception string or number, got " + value);