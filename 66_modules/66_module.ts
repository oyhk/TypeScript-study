import Shape, {drawShapes} from "./66_shape_interface";

let a: Shape = {
    draw(): void {
    }
};
drawShapes(a);

class Circle implements Shape {
    draw(): void {
        console.log("drawing Circle")
    }
}

class Rectangle implements Shape {
    draw(): void {
        console.log('drawing Rectangle')
    }
}

let circle = new Circle();
let rectangle = new Rectangle();

let c = drawShapes(circle);