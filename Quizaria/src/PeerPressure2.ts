import Scene from "./Scene.js";
import { MouseListener } from "./MouseListener.js";
import CanvasUtil from "./CanvasUtil.js";
import KeyListener from "./KeyListener.js";
import Answers from "./Answers.js";
import secondAnswers from "./Answers2.js";

export default class secondPeerPressure extends Scene {

    private continue: boolean;

    private context: CanvasRenderingContext2D;

    private background: HTMLImageElement;

    private keyListener: KeyListener;

    private cyberProblem: string;

    private result: boolean;

    private redButton: HTMLImageElement;

    private yellowButton: HTMLImageElement;

    private blueButton: HTMLImageElement;
    
    private numberToEnd: number;

    public constructor(canvas: HTMLCanvasElement, maxX: number, maxY: number, cyberproblem: string, numberToEnd: number) {
        super(canvas);
        this.canvas = canvas;
        document.getElementById('body').style.backgroundImage = "url(./assets/BackGround.png)"
        this.result = true;
        this.cyberProblem = cyberproblem;
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
                this.result = true;
                this.continue = true;
                console.log('red');

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
                console.log('yellow');

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
                console.log('blue');

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
        CanvasUtil.drawImage(canvas, this.redButton, 100, 500);
        CanvasUtil.drawImage(canvas, this.yellowButton, 575, 480);
        CanvasUtil.drawImage(canvas, this.blueButton, 1100, 504);
        CanvasUtil.writeTextToCanvas(canvas, 'You are waiting for the game to start in Fortnite and', 700, 200, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'a friend says: everybody turn your game console off now!', 700, 250, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'three of your friends do it, but what are you doing?', 700, 300, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'A: I turn off my console', 250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'its funny right', 250, 580, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'B: I do not turn if off', 750, 540, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'why whould i listen to him', 750, 565, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'if three other people do it to?', 750, 600, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'C: I do not turn of my console', 1250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'but if he gave a good reason ', 1250, 575, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'I am willing to do it', 1250, 600, 'center', 'Arial', 20, 'white');
    }
}