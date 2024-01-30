import Scene from "./Scene.js";
import CanvasUtil from "./CanvasUtil.js";
import Answers from "./Answers.js";
export default class PeerPressure extends Scene {
    continue;
    context;
    background;
    keyListener;
    cyberProblem;
    result;
    redButton;
    yellowButton;
    blueButton;
    numberToEnd;
    constructor(canvas, maxX, maxY, cyberproblem, numberToEnd) {
        super(canvas);
        this.canvas = canvas;
        document.getElementById('body').style.backgroundImage = "url(./assets/BackGround.png)";
        this.result = true;
        this.cyberProblem = cyberproblem;
        this.numberToEnd = numberToEnd;
        this.redButton = CanvasUtil.loadNewImage('./assets/redButton.png');
        this.blueButton = CanvasUtil.loadNewImage('./assets/blueButton.png');
        this.yellowButton = CanvasUtil.loadNewImage('./assets/yellowButton.png');
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
        CanvasUtil.drawImage(canvas, this.redButton, 100, 500);
        CanvasUtil.drawImage(canvas, this.yellowButton, 575, 480);
        CanvasUtil.drawImage(canvas, this.blueButton, 1100, 504);
        CanvasUtil.writeTextToCanvas(canvas, 'You are with your classmates together in a group on Snapchat', 700, 200, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'and a friend of one of you classmates you do not know', 700, 250, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'is asking everyone to make a picture with a funny face', 700, 300, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'what you do not know is that he does not mean well with the fotos', 700, 350, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'You see everyone sending them, what do you do?', 700, 400, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'A: I send the picture', 250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'what could go wrong', 250, 575, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'B: I send the picture', 750, 540, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'I do not trust it but', 750, 565, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'everyone is sending them', 760, 595, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'so I do it to', 750, 620, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'C: I do not send the fotos', 1250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'because i do not know him', 1250, 575, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'and I do not trust them', 1250, 600, 'center', 'Arial', 20, 'white');
    }
}
//# sourceMappingURL=PeerPressure.js.map