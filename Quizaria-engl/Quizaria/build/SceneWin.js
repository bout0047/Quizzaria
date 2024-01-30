import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import SceneStart from './Start.js';
export default class SceneWin extends Scene {
    continue;
    constructor(maxX, maxY) {
        super(maxX, maxY);
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
            this.continue = true;
        }
    }
    update(elapsed) {
        if (this.continue) {
            return new SceneStart(this.maxX, this.maxY);
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.writeTextToCanvas(canvas, 'You WIN', canvas.width / 2, canvas.height / 2, 'center', 'Arial', 40, 'black');
    }
}
//# sourceMappingURL=SceneWin.js.map