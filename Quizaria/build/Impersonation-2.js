import Scene from "./Scene.js";
import CanvasUtil from "./CanvasUtil.js";
import Answers from "./Answers.js";
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
    constructor(canvas, maxX, maxY, cyberProblem) {
        super(canvas);
        this.canvas = canvas;
        document.getElementById('body').style.backgroundImage = "url(./assets/BackGround.png)";
        this.result = true;
        this.cyberProblem = cyberProblem;
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
                this.result = true;
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
    processInput() {
    }
    update(elapsed) {
        if (this.continue) {
            return new Answers(this.canvas, this.result, this.cyberProblem);
        }
        return null;
    }
    render(canvas) {
        this.context = CanvasUtil.getCanvasContext(canvas);
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.drawImage(canvas, this.redButton, 100, 500);
        CanvasUtil.drawImage(canvas, this.yellowButton, 575, 480);
        CanvasUtil.drawImage(canvas, this.blueButton, 1100, 504);
        CanvasUtil.writeTextToCanvas(canvas, 'Stel je voor. Je hebt net 100.000 abonnees behaald', 300, 275, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'op je YouTube account, gefeliciteerd! Maar, je komt', 300, 320, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'iemand tegen die zich voor doet als jij.', 300, 365, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Deze vorm van Cyberbullying is identiteitsfraude.', 300, 405, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Wat doe je?', 950, 445, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'A: Super grappig, ik heb fans ;)', 250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Ik like zijn videos en', 250, 575, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'abonneer op zijn account.', 250, 600, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'B: Ik rapporteer hem', 750, 540, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'direct bij YouTube,', 750, 565, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'voordat hij straks nog meer', 760, 590, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'abonnees onder mijn naam afpakt.', 760, 615, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'C: Ik negeer zijn account.', 1250, 550, 'center', 'Arial', 20, 'white');
    }
}
//# sourceMappingURL=Impersonation-2.js.map