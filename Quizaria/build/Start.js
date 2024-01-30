import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import Images from './Images.js';
import Instruction from './Instructions.js';
export default class Start extends Scene {
    starting;
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
            this.starting = true;
        }
    }
    update(elapsed) {
        if (this.starting) {
            return new Instruction(this.canvas);
        }
        return null;
    }
    render(canvas) {
        this.images.forEach((image) => image.render(canvas));
        CanvasUtil.writeTextToCanvas(canvas, 'press [enter] to start', 775, 650, 'center', 'Arial', 60, 'red');
    }
}
//# sourceMappingURL=Start.js.map