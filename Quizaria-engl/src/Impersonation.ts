import Scene from "./Scene"
import { MouseListener } from "./MouseListener"
import CanvasUtil from "./CanvasUtil"
import Answers from "./Answers";
import KeyListener from "./KeyListener";

export default class Impersonation extends Scene {

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

    private numberToEnd: number;

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
                this.result = true;
                this.continue = true;

            }
            //blueButton click
            if (
                event.x > blueXPos
                && event.x < blueXPos + this.blueButton.width
                && event.y > blueYPos
                && event.y < blueYPos + this.blueButton.height
            ) {
                this.result = false;
                this.continue = true;

            }




        }
        this.canvas.addEventListener('click', klikfunctie);
    }

    public processInput(): void {
    }

    public update(elapsed: number): Scene {
        if (this.continue) { return new Answers(this.canvas, this.result, this.cyberProblem, this.numberToEnd) }
        return null;
    }

    public render(canvas: HTMLCanvasElement): void {
        this.context = CanvasUtil.getCanvasContext(canvas)
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.drawImage(canvas, this.redButton, 100, 500);
        CanvasUtil.drawImage(canvas, this.yellowButton, 575, 480);
        CanvasUtil.drawImage(canvas, this.blueButton, 1100, 504);
        CanvasUtil.writeTextToCanvas(canvas, 'Imagine. You just reached 100,000 subscribers', 300, 275, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'on your YouTube account, congratulations! But, you are coming', 300, 320, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'across someone pretending to be you.', 300, 365, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'This form of Cyberbullying is identity fraud.', 300, 405, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'What are you doing?', 950, 445, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'A: Super funny, I have fans ;)', 250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'I like his videos and', 250, 575, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'subscribe to his account.', 250, 600, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'B: I report him', 750, 540, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'directly at YouTube,', 750, 565, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'before he gets more', 760, 590, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'subscribers because of my name.', 760, 615, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'C: I am ignoring his account.', 1250, 550, 'center', 'Arial', 20, 'white');
      
    }

}