class Rectangle {
    private w: number;
    private h: number;


    constructor(w: number, h: number) {
        this.w = w;
        this.h = h;
    }

    getArea() {
        return function (): number {
            return this.w * this.h;
        }
    }
}

let r = new Rectangle(3, 4);
console.log(r.getArea()());


// tsc --noImplicitThis 42_nolmplicitThis_flag_arrow_function.ts
//  return function (): number {
//                    ~~~~~~~~
//     An outer value of 'this' is shadowed by this container.


class Rectangle1 {
    private readonly w: number;
    ￿private readonly h: number;


    constructor(w: number, h: number) {
        this.w = w;
        this.h = h;
    }

    getArea() {
        return (): number => {
            return this.w * this.h;
        }
    }
}

let r1 = new Rectangle1(3, 4);
console.log(r1.getArea()());
