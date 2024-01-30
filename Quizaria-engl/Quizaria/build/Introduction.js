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
        CanvasUtil.writeTextToCanvas(canvas, 'Mijn naam is Nick, de Meester van Quizzaria.', 775, 300, 'center', 'Arial', 40, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Behaal jij alle vragen en win jij het spel voor eeuwige roem?', 775, 350, 'center', 'Arial', 40, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'De vragen zullen moeilijk, maar ook misschien makkelijk zijn.', 775, 400, 'center', 'Arial', 40, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'De vragen staan allemaal in het thema van Cyberbullying.', 775, 450, 'center', 'Arial', 40, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'of wel, Online Pesten..', 775, 550, 'center', 'Arial', 60, 'red');
        CanvasUtil.writeTextToCanvas(canvas, 'Veel succes speler!', 775, 600, 'center', 'Arial', 60, 'red');
        CanvasUtil.writeTextToCanvas(canvas, 'Druk [enter] om door te gaan!', 775, 650, 'center', 'Arial', 60, 'red');
    }
}
//# sourceMappingURL=Introduction.js.map