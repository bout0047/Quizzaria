import { Game } from './GameLoop.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Start from './Start.js';
export default class Quizaria extends Game {
    canvas;
    keyListener;
    currentScene;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.keyListener = new KeyListener();
        this.currentScene = new Start(this.canvas);
    }
    processInput() {
        this.currentScene.processInput(this.keyListener);
    }
    update(elapsed) {
        const nextScene = this.currentScene.update(elapsed);
        if (nextScene !== null)
            this.currentScene = nextScene;
        return true;
    }
    render() {
        CanvasUtil.clearCanvas(this.canvas);
        this.currentScene.render(this.canvas);
    }
}
//# sourceMappingURL=Quizaria.js.map