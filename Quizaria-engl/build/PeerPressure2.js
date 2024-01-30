import Scene from "./Scene.js";
import CanvasUtil from "./CanvasUtil.js";
import secondAnswers from "./Answers2.js";
export default class secondPeerPressure extends Scene {
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
                this.result = true;
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
    processInput(keyListener) {
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
        CanvasUtil.writeTextToCanvas(canvas, 'Je bent met je vrienden op Fortnite in een lobby aan het wachten.', 700, 200, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Een vriend zegt: iedereen doe nu je Game Console uit!', 700, 250, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Drie van je vrienden doen het, maar wat doe jij?', 700, 300, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Je ziet dat iedereen ze ook stuurt. Wat doe jij?', 700, 400, 'center', 'Arial', 30, 'white');
        CanvasUtil.drawImage(canvas, this.redButton, 100, 500);
        CanvasUtil.drawImage(canvas, this.yellowButton, 575, 480);
        CanvasUtil.drawImage(canvas, this.blueButton, 1100, 504);
        CanvasUtil.writeTextToCanvas(canvas, 'A: Ik doe mijn Console uit, het is grappig!', 250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'B: Ik doe mijn Console niet uit,', 750, 540, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'want waarom zou ik luisteren?', 750, 565, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'als drie anderen het ook doen?', 750, 595, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'C: Ik doe mijn Console niet uit,', 1250, 575, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'maar als hij een goede reden geeft, kan ik het wel doen', 1250, 600, 'center', 'Arial', 20, 'white');
    }
}
//# sourceMappingURL=PeerPressure2.js.map