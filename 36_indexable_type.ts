interface IStates {
    [state: string]: boolean;
}

let s: IStates = {'enabled': true, 'disabled': false};

console.log(s);
console.log(s['enabled']);

interface IIndex {
    [index:string]:number;
}
let ii:IIndex = {'zero':0,'one':1,'tow':2};
console.log(ii);
