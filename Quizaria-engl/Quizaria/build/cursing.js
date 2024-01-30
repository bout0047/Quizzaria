import Answers from "./Answers.js";
import CanvasUtil from "./CanvasUtil.js";
import Scene from "./Scene.js";
export default class Cursing extends Scene {
    continue;
    context;
    image;
    redButton;
    yellowButton;
    blueButton;
    mouselistener;
    keylistener;
    result;
    cyberProblem;
    numberToEnd;
    constructor(canvas, maxX, maxY, cyberProblem, numberToEnd) {
        super(canvas);
        this.canvas = canvas;
        document.getElementById('body').style.backgroundImage = "url(./assets/BackGround.png)";
        this.result = true;
        this.cyberProblem = cyberProblem;
        this.redButton = CanvasUtil.loadNewImage('./assets/redButton.png');
        this.blueButton = CanvasUtil.loadNewImage('./assets/blueButton.png');
        this.yellowButton = CanvasUtil.loadNewImage('./assets/yellowButton.png');
        this.image = CanvasUtil.loadNewImage('./assets/cursing_habbo_dm.png');
        this.numberToEnd = numberToEnd;
        const klikfunctie = (event) => {
            const redXPos = 100;
            const redYPos = 500;
            const yelXPos = 575;
            const yelYpos = 480;
            const blueXPos = 1100;
            const blueYPos = 504;
            if (event.x > redXPos
                && event.x < redXPos + this.redButton.width
                && event.y > redYPos
                && event.y < redYPos + this.redButton.height) {
                this.result = false;
                this.continue = true;
                console.log('red');
            }
            if (event.x > yelXPos
                && event.x < yelXPos + this.yellowButton.width
                && event.y > yelYpos
                && event.y < yelYpos + this.yellowButton.height) {
                this.result = false;
                this.continue = true;
                console.log('yellow');
            }
            if (event.x > blueXPos
                && event.x < blueXPos + this.blueButton.width
                && event.y > blueYPos
                && event.y < blueYPos + this.blueButton.height) {
                this.result = true;
                this.continue = true;
                console.log('blue');
            }
        };
        this.canvas.addEventListener('click', klikfunctie);
    }
    processInput() {
    }
    update(elapsed) {
        if (this.continue) {
            return new Answers(this.canvas, this.result, this.cyberProblem, this.numberToEnd);
        }
        return null;
    }
    render(canvas) {
        this.context = CanvasUtil.getCanvasContext(canvas);
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.drawImage(canvas, this.redButton, 100, 500);
        CanvasUtil.drawImage(canvas, this.yellowButton, 575, 480);
        CanvasUtil.drawImage(canvas, this.blueButton, 1100, 504);
        CanvasUtil.drawImage(canvas, this.image, 0, 0);
        CanvasUtil.writeTextToCanvas(canvas, 'Je speelt Habbo.', 950, 100, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Iemand scheldt je uit in de chat.', 950, 150, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, ' Deze vorm van Cyberbullying is schelden.', 940, 200, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Wat doe je?', 950, 250, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'A: Het spel verlaten,', 250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'ik speel Habbo toch niet zo', 250, 575, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'vaak. Ik ga wel Fortnite spelen.', 250, 600, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'B: Ik zou hem terug uit schelden', 750, 560, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'om duidelijk te maken dat', 750, 585, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'ik het niet leuk vind.', 760, 610, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'C: De speler aangeven en', 1250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'geen aandacht aan geven.', 1250, 575, 'center', 'Arial', 20, 'white');
    }
}
//# sourceMappingURL=Cursing.js.map