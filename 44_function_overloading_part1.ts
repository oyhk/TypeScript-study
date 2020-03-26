function sum(x: number, y: number): void;
function sum(x: string, y: number): void;


// function sum(x: any, y: number) {
//     if (typeof x === 'string') {
//         console.log(x + y)
//     } else {
//         console.log(x + y)
//     }
// }

function sum(x: number | string, y: number) {
    if (typeof x === 'string') {
        console.log(x + y)
    } else {
        console.log(x + y)
    }
}

sum(1, 2);
sum(1, 2);

