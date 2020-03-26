interface Shape {
    draw(): void;
}

// function drawShapes(shape: Shape): Shape {
//     shape.draw();
//     return shape;
// }

// 这里extends并不是继承的意思，而是约束为Shape类型的意思
function drawShapes<T extends Shape>(shape: T): T {
    shape.draw();
    return shape;
}

let a: Shape = {
    draw: () => {

    }
};

drawShapes(a);

class Circle implements Shape{
    draw(): void {
        console.log('drawing circle...');
    }
}

class Rectangle implements Shape{
    draw(): void {
        console.log('drawing Rectangle...');
    }
}

let circle = new Circle();
let rectangle = new Rectangle();


let c = drawShapes(circle);
let d = drawShapes(rectangle);