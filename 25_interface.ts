// interface

interface IPerson {
    name: string;
}

class HK implements IPerson{
    name: string;

}
const sayName = (o: IPerson) => {
    console.log(o.name);
};

let hk = new HK();
hk.name = 'oyhk';
sayName(hk);