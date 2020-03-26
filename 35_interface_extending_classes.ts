class Component {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    display(): void {
        console.log('displaying...')
    }


}


// 接口继承类
interface IWidget extends Component {
    hide():void;
}

class Button extends Component implements IWidget{
    hide(): void {
        console.log('hiding...')
    }
}

let b = new Button(1,2);
b.display();
b.hide();