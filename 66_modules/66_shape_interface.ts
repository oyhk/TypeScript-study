export default interface Shape {
    draw(): void;
}

export function drawShapes<T extends Shape>(shape: T): T {
    shape.draw();
    return shape;
}