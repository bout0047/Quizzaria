import Scene from "./Scene"
import { MouseListener } from "./MouseListener"
import CanvasUtil from "./CanvasUtil"
import Answers from "./Answers";
import KeyListener from "./Keylistener";
import secondAnswers from "./Answers2";

export default class secondImpersonation extends Scene {

    private continue: boolean;

    private context: CanvasRenderingContext2D;

    private background: HTMLImageElement;

    private redButton: HTMLImageElement;

    private yellowButton: HTMLImageElement;

    private blueButton: HTMLImageElement;

    private mouselistener: MouseListener;

    private keylistener: KeyListener;

    private result: boolean;

    private cyberProblem: string;

    private numberToEnd: number

    public constructor(canvas: HTMLCanvasElement, maxX: number, maxY: number, cyberProblem: string, numberToEnd: number) {
        super(canvas);
        this.canvas = canvas;
        document.getElementById('body').style.backgroundImage = "url(./assets/BackGround.png)"
        this.result = true;
        this.cyberProblem = cyberProblem;
        this.redButton = CanvasUtil.loadNewImage('./assets/redButton.png')
        this.blueButton = CanvasUtil.loadNewImage('./assets/blueButton.png')
        this.yellowButton = CanvasUtil.loadNewImage('./assets/yellowButton.png')
        this.numberToEnd = numberToEnd;

        const klikfunctie = (event: MouseEvent) => {
            const redXPos = 100;
            const redYPos = 500;
            const yelXPos = 575;
            const yelYpos = 480;
            const blueXPos = 1100;
            const blueYPos = 504;
            //redbutton click
            if (
                event.x > redXPos
                && event.x < redXPos + this.redButton.width
                && event.y > redYPos
                && event.y < redYPos + this.redButton.height
            ) {
                this.result = false;
                this.continue = true;

            }
            //yellowbutton click
            if (
                event.x > yelXPos
                && event.x < yelXPos + this.yellowButton.width
                && event.y > yelYpos
                && event.y < yelYpos + this.yellowButton.height
            ) {
                this.result = false;
                this.continue = true;

            }
            //blueButton click
            if (
                event.x > blueXPos
                && event.x < blueXPos + this.blueButton.width
                && event.y > blueYPos
                && event.y < blueYPos + this.blueButton.height
            ) {
                this.result = true;
                this.continue = true;

            }




        }
        this.canvas.addEventListener('click', klikfunctie);
    }

    public processInput(): void {
    }

    public update(elapsed: number): Scene {
        if (this.continue) { return new secondAnswers(this.canvas, this.result, this.cyberProblem, this.numberToEnd) }
        return null;
    }

    public render(canvas: HTMLCanvasElement): void {
        this.context = CanvasUtil.getCanvasContext(canvas)
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.drawImage(canvas, this.redButton, 100, 500);
        CanvasUtil.drawImage(canvas, this.yellowButton, 575, 480);
        CanvasUtil.drawImage(canvas, this.blueButton, 1100, 504);
        CanvasUtil.writeTextToCanvas(canvas, 'Je scrollt even op TikTok. Onder een challenge zie je dat', 300, 100, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'you must send a photo of yourself with your name to ****@hotmail.com,', 300, 150, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'You could win $10,000! What you do not know,', 300, 200, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'is this is a bully who just wants to be funny and then pretend to be you!', 300, 250, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'This form of Cyberbullying is Impersonation.', 300, 300, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'A: I trust the account with', 250, 550, 'center', 'Arial', 18, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'more than 5 million followers, he/she is anyway', 250, 575, 'center', 'Arial', 15, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'a famous person, so why not?', 250, 600, 'center', 'Arial', 15, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'B: I am forwarding it', 750, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'to my friends so that they', 750, 575, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'test it first haha!', 760, 600, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'C: I do not', 1250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'and ignore the Challenge.', 1250, 575, 'center', 'Arial', 20, 'white');
    }
}