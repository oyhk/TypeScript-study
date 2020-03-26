const sum = (a: number, b: number[]) => {

    let bSum: number = 0;
    for (let i in b) {
        bSum = bSum + b[i];
    }

    let cSum: number = 0;
    b.forEach((value, index, array) => {

        cSum = cSum + value;
    });

    console.log(a + bSum + cSum);
};

sum(1, [2, 3, 4, 5]);


const sum1 = (a: number, ...b: number[]) => {
    let total = b.reduce((total, num) => {
        return total + num;
    });
    console.log(a + total);
};

sum1(1, 2, 3, 4, 5);


const sum2 = (a: number, ...b: Array<number>) => {

    let bSum: number = 0;
    for (let i in b) {
        bSum = bSum + b[i];
    }

    let cSum: number = 0;
    b.forEach((value, index, array) => {

        cSum = cSum + value;
    });

    console.log(a + bSum + cSum);
};

sum2(1, 2, 3, 4, 5,6,7,8,9);