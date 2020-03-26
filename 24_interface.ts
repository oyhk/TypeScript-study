// 传入对象有name属性就可以输出
const sayName = (o) => {
    console.log(o.name);
};

const person = {
    age: 30,
    name: 'oyhk'
};

sayName(person);