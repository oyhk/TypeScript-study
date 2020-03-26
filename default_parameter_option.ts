// default parameter
const sum = (a: number, b: number = 10): void => {
    console.log(a + b);
};
sum(10);

// The default parameter can not used in the first position of the parameter
const sum1 = (a: number = 20, b: number = 10): void => {
    console.log(a + b);
};
sum1();
// output 30



// The option parameter example
const sum2 = (a: number, b?: number) => {
    if (b) {
        console.log(a + b);
    } else {
        console.log(a);
    }
};
sum2(1); // output 1
sum2(1, 2); // output 2