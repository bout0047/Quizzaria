import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import Images from './Images.js';
import Start from './Start.js';
export default class Endscreen extends Scene {
    starting;
    images = [];
    name;
    constructor(canvas) {
        super(canvas);
        this.images.push(new Images(300, -250, CanvasUtil.loadNewImage('./assets/Quizzaria-Logo-Png.png')));
        document.getElementById('body').style.backgroundImage = "url(./assets/BackGround.png";
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
            return new Start(this.canvas);
        }
        return null;
    }
    render(canvas) {
        this.images.forEach((image) => image.render(canvas));
        CanvasUtil.writeTextToCanvas(canvas, 'Winner', 775, 400, 'center', 'Arial', 100, 'red');
        CanvasUtil.writeTextToCanvas(canvas, 'Good job, you win', 775, 650, 'center', 'Arial', 100, 'red');
    }
}
//# sourceMappingURL=Endscreen.js.map