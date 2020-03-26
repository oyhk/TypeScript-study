interface IPerson {
    // 可以理解为匿名函数
    (sex: string): void;
}

let person: IPerson;
person = (sex: string): void => {
    console.log(`sex : ${sex}`);
};

class HK {
    saySex(person: IPerson): void {
        person('man');
    }
}

let hk = new HK();
hk.saySex(person);