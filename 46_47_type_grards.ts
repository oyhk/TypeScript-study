function show(x: number | string): void {
    console.log(typeof x);
    if (typeof x === 'number') {
        console.log("a number " + x);
    } else {
        console.log("a string " + x);
    }
}
show("test string");
show(4);

class Person {}

let person = new Person();
console.log(typeof person);
console.log(typeof String("test"));
console.log(typeof undefined);
console.log(typeof null);


class Car {
    start() {
        console.log('car starting');
    }

    drive() {
        console.log('car driving');
    }
}

class Bike {
    start() {
        console.log('bike starting');
    }

    ride() {
        console.log('bike ridding');
    }
}

function move(vehicle: Bike | Car): void {
    vehicle.start();
    console.log((<Car>vehicle).drive);
    //第一种
    // vehicle.drive !== undefined
    // 第二种
    if((<Car>vehicle).drive) {
        (<Car>vehicle).drive();
    } else {
        (<Bike>vehicle).ride();
    }
    // 第三种
    if(vehicle instanceof Car){
        vehicle.drive();
    }
    if(vehicle instanceof Bike){
        vehicle.ride();
    }
}

move(new Car());
move(new Bike());