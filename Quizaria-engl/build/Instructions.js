import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import Images from './Images.js';
import Introduction from './Introduction.js';
export default class Instruction extends Scene {
    continue;
    images = [];
    name;
    constructor(canvas) {
        super(canvas);
        this.images.push(new Images(300, -250, CanvasUtil.loadNewImage('./assets/Quizzaria-Logo-Png.png')));
        this.images.push(new Images(100, 200, CanvasUtil.loadNewImage('./assets/wasd-no-bg.png')));
        this.images.push(new Images(800, 350, CanvasUtil.loadNewImage('./assets/wizardNpc.png')));
        this.images.push(new Images(900, 350, CanvasUtil.loadNewImage('./assets/bluehairNpc.png')));
        this.images.push(new Images(1000, 350, CanvasUtil.loadNewImage('./assets/greenhairNpc.png')));
        this.images.push(new Images(1100, 350, CanvasUtil.loadNewImage('./assets/oldmanNpc.png')));
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
            return new Introduction(this.canvas);
        }
        return null;
    }
    render(canvas) {
        this.images.forEach((image) => image.render(canvas));
        CanvasUtil.writeTextToCanvas(canvas, 'gebruik de pijltjestoetsen of', 300, 500, 'center', 'Arial', 40, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'w a s d om te bewegen', 300, 550, 'center', 'Arial', 40, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'dit zijn docenten', 1000, 500, 'center', 'Arial', 40, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'druk op [spatie] om naar zijn/haar quiz te gaan', 1000, 550, 'center', 'Arial', 40, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'druk op [enter] om door te gaan', 775, 650, 'center', 'Arial', 60, 'red');
    }
}
//# sourceMappingURL=Instructions.js.map