import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import Images from './Images.js';
import Hub from './Hub.js';
export default class Introduction extends Scene {
    continue;
    images = [];
    name;
    constructor(canvas) {
        super(canvas);
        this.images.push(new Images(300, -250, CanvasUtil.loadNewImage('./assets/Quizzaria-Logo-Png.png')));
    }
    getName() {
        return this.name;
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_ENTER)) {
            this.continue = true;
        }
    }
    update(elapsed) {
        if (this.continue) {
            return new Hub(this.canvas, 0);
        }
        return null;
    }
    render(canvas) {
        this.images.forEach((image) => image.render(canvas));
        CanvasUtil.writeTextToCanvas(canvas, 'My name is Nick, Master of Quizzaria', 775, 300, 'center', 'Arial', 40, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Will you answer all the questions and win the game?', 775, 350, 'center', 'Arial', 40, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'The questions will be hard or maybe easy for you', 775, 400, 'center', 'Arial', 40, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'The questions are all about the subject cyberbullying', 775, 450, 'center', 'Arial', 40, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Good luck player', 775, 580, 'center', 'Arial', 60, 'red');
        CanvasUtil.writeTextToCanvas(canvas, 'Press [enter] to continue!', 775, 650, 'center', 'Arial', 60, 'red');
    }
}
//# sourceMappingURL=Introduction.js.map