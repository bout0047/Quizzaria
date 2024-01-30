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
            return new Hub(this.canvas);
        }
        return null;
    }
    render(canvas) {
        this.images.forEach((image) => image.render(canvas));
        CanvasUtil.writeTextToCanvas(canvas, 'Borgir', 300, 500, 'center', 'Arial', 40, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'om te bewegen', 300, 550, 'center', 'Arial', 40, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'dit zijn docenten', 1000, 500, 'center', 'Arial', 40, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'druk op [spatie] om naar zijn/haar quiz te gaan', 1000, 550, 'center', 'Arial', 40, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'druk op [enter] om door te gaan', 775, 650, 'center', 'Arial', 60, 'red');
    }
}
//# sourceMappingURL=AfterInstruction.js.map