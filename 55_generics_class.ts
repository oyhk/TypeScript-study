class Person {
    id: number;
    name: string;
}

class JsonResult<T> {
    code: number;
    desc: string;
    data: T

}

let jr = new JsonResult<Person>();
jr.code = 200;
jr.desc = 'success';
let hk = new Person();
hk.id = 1;
hk.name = 'oyhk';
jr.data = hk;

console.log(jr);


let jr2 = new JsonResult<number>();
jr2.code = 200;
jr2.desc = 'success';
jr2.data = 1;


class JsonResult1<T> {
    code: number;
    desc: string;
    data: T[];

}



let jr1 = new JsonResult1<number>();
jr1.code = 200;
jr1.desc = 'success';

jr1.data = [1,2,3];
