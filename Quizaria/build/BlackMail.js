import Answers from "./Answers.js";
import CanvasUtil from "./CanvasUtil.js";
import Scene from "./Scene.js";
export default class BlackMail extends Scene {
    continue;
    context;
    background;
    redButton;
    yellowButton;
    blueButton;
    mouselistener;
    keylistener;
    result;
    cyberProblem;
    image;
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
        this.image = CanvasUtil.loadNewImage('./assets/smaller-blackmail.png');
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
                this.result = true;
                this.continue = true;
            }
            if (event.x > yelXPos
                && event.x < yelXPos + this.yellowButton.width
                && event.y > yelYpos
                && event.y < yelYpos + this.yellowButton.height) {
                this.result = false;
                this.continue = true;
            }
            if (event.x > blueXPos
                && event.x < blueXPos + this.blueButton.width
                && event.y > blueYPos
                && event.y < blueYPos + this.blueButton.height) {
                this.result = false;
                this.continue = true;
            }
        };
        this.canvas.addEventListener('click', klikfunctie);
    }
    processInput(keyListener) {
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
        CanvasUtil.drawImage(canvas, this.image, 200, 0);
        CanvasUtil.drawImage(canvas, this.redButton, 100, 500);
        CanvasUtil.drawImage(canvas, this.yellowButton, 575, 480);
        CanvasUtil.drawImage(canvas, this.blueButton, 1100, 504);
        CanvasUtil.writeTextToCanvas(canvas, 'What if you make wierd fotos with friends', 600, 100, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'and somebody else gets send these fotos', 600, 150, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'and you know that if these pictures are knows, it will mean trouble', 600, 200, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'So he sends you a mesage with a threat', 600, 250, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'What are you doing?', 600, 300, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'A: I get a teacher', 250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'he/she will fix the problem', 250, 575, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'B: I will ignore him', 750, 560, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'He lies about sending them', 750, 585, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'C: I give him the money,', 1250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'and hope he will not send them', 1260, 575, 'center', 'Arial', 20, 'white');
    }
}
//# sourceMappingURL=BlackMail.js.map