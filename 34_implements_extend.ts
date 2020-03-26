interface TypeC {
    name: string;
}

interface USB {
    type: number;
}

class Mac {

    print(name: string): void {
        console.log(name)
    }
}


class MacBook extends Mac implements TypeC, USB {
    name: string;
    type: number;

}


let macBook = new MacBook();
macBook.name = 'MacBook';
macBook.print(macBook.name);