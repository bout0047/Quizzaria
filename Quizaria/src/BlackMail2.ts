import Answers from "./Answers.js";
import secondAnswers from "./Answers2.js";
import CanvasUtil from "./CanvasUtil.js";
import KeyListener from "./KeyListener.js";
import { MouseListener } from "./MouseListener.js";
import Scene from "./Scene.js";

export default class secondBlackMail extends Scene {

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

    private image: HTMLImageElement;

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
        this.image = CanvasUtil.loadNewImage('./assets/smaller-blackmail.png')
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

            // this.canvas.removeEventListener('click', klikfunctie);



        }
        this.canvas.addEventListener('click', klikfunctie);
    }

    public processInput(keyListener: KeyListener): void {
    }

    public update(elapsed: number): Scene {
        if (this.continue) { return new secondAnswers(this.canvas, this.result, this.cyberProblem, this.numberToEnd) }
        return null;
    }

    public render(canvas: HTMLCanvasElement): void {
        this.context = CanvasUtil.getCanvasContext(canvas)
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.drawImage(canvas, this.image, 200, 0);
        CanvasUtil.drawImage(canvas, this.redButton, 100, 500);
        CanvasUtil.drawImage(canvas, this.yellowButton, 575, 480);
        CanvasUtil.drawImage(canvas, this.blueButton, 1100, 504);
        CanvasUtil.writeTextToCanvas(canvas, 'Imagine your classmates threaten you withe', 600, 100, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'sending personal information to everyone', 600, 150, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'if you do not do exactly as they say', 600, 200, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'What do you do?', 600, 300, 'left', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'A: Do what they want and hope', 250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'they do nothing with them', 250, 575, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'B: ask help from parents', 750, 560, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'or guardians', 750, 585, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'C: threaten the classmates back', 1260, 550, 'center', 'Arial', 20, 'white');
    }
}