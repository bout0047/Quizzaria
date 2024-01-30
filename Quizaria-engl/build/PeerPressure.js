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
        CanvasUtil.writeTextToCanvas(canvas, 'Je zit met je klasgenoten samen in een groep op Snapchat.', 700, 200, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Een vriend van een van de klasgenoten die je niet kent', 700, 250, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'vraagt iedereen om een foto te maken en een raar gezicht te maken.', 700, 300, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Wat je niet weet is dat hij geen leuke bedoelingen heeft met deze fotos.', 700, 350, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Je ziet dat iedereen ze ook stuurt. Wat doe jij?', 700, 400, 'center', 'Arial', 30, 'white');
        CanvasUtil.drawImage(canvas, this.redButton, 100, 500);
        CanvasUtil.drawImage(canvas, this.yellowButton, 575, 480);
        CanvasUtil.drawImage(canvas, this.blueButton, 1100, 504);
        CanvasUtil.writeTextToCanvas(canvas, 'A: Ik stuur de foto', 250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'want wat kan er nu mis gaan?', 250, 575, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'B: Ik stuur de foto', 750, 540, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'ik vertrouw het eigenlijk niet!', 750, 565, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'maar iedereen heeft het gestuurd', 760, 595, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'dus dan doe ik het ook!', 750, 620, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'C: Ik stuur de foto niet', 1250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'want ik ken hem niet', 1250, 575, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'en vertrouw het niet.', 1250, 600, 'center', 'Arial', 20, 'white');
    }
}
//# sourceMappingURL=PeerPressure.js.map