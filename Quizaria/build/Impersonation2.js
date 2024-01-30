import Scene from "./Scene.js";
import CanvasUtil from "./CanvasUtil.js";
import secondAnswers from "./Answers2.js";
export default class secondImpersonation extends Scene {
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
                this.result = true;
                this.continue = true;
            }
        };
        this.canvas.addEventListener('click', klikfunctie);
    }
    processInput() {
    }
    update(elapsed) {
        if (this.continue) {
            return new secondAnswers(this.canvas, this.result, this.cyberProblem, this.numberToEnd);
        }
        return null;
    }
    render(canvas) {
        this.context = CanvasUtil.getCanvasContext(canvas);
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.drawImage(canvas, this.redButton, 100, 500);
        CanvasUtil.drawImage(canvas, this.yellowButton, 575, 480);
        CanvasUtil.drawImage(canvas, this.blueButton, 1100, 504);
        CanvasUtil.writeTextToCanvas(canvas, 'Yor scrolling on Tiktok and you see a challenge', 300, 100, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'send a foto of yourself and your name to ****@hotmail.com,', 300, 150, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'to win 10.000 euros. What you do not know ,', 300, 200, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'is that this bully is just trying to be funny and will pretend to be you', 300, 250, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'This from of cyberbullying is Impersonation', 300, 300, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'A: I trust an account with', 250, 550, 'center', 'Arial', 18, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'over 5 milion followers, he/she is a famous', 250, 575, 'center', 'Arial', 15, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'person right, so why not?', 250, 600, 'center', 'Arial', 15, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'B: I will send it to', 750, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'my friends so that they', 750, 575, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'can test the challenge first', 760, 600, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'C: I will not do it', 1250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'I ignore the challenge', 1250, 575, 'center', 'Arial', 20, 'white');
    }
}
//# sourceMappingURL=Impersonation2.js.map