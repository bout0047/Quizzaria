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
        CanvasUtil.writeTextToCanvas(canvas, 'You are playing Habbo', 950, 100, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'and somebody is cursing you in chat', 950, 150, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'this form of cyberbullying is cursing', 940, 200, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'What do you do?', 950, 250, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'A: Leave the game', 250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'I do not play Habbo that often', 250, 575, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'I will just play fortnite', 250, 600, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'B: I say it back to him to', 750, 560, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'make clear that I', 750, 585, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'do not like being cursed at.', 760, 610, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'C: Report the player and', 1250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'do not pay attention to them', 1250, 575, 'center', 'Arial', 20, 'white');
    }
}
//# sourceMappingURL=Cursing.js.map