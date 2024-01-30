import Scene from "./Scene";
import { MouseListener } from "./MouseListener";
import CanvasUtil from "./CanvasUtil";
import KeyListener from "./KeyListener";
import Answers from "./Answers";

export default class PeerPressure extends Scene {

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
        this.numberToEnd = numberToEnd;
        this.redButton = CanvasUtil.loadNewImage('./assets/redButton.png')
        this.blueButton = CanvasUtil.loadNewImage('./assets/blueButton.png')
        this.yellowButton = CanvasUtil.loadNewImage('./assets/yellowButton.png')

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

            // this.canvas.removeEventListener('click', klikfunctie);



        }
        this.canvas.addEventListener('click', klikfunctie);
    }

    public processInput(keyListener: KeyListener): void {
    }

    public update(elapsed: number): Scene {
        if (this.continue) { return new Answers(this.canvas, this.result, this.cyberProblem, this.numberToEnd) }
        return null;
    }

    public render(canvas: HTMLCanvasElement): void {
        this.context = CanvasUtil.getCanvasContext(canvas)
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.writeTextToCanvas(canvas, 'You are in a group on Snapchat with your classmates.', 700, 200, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'A friend of one of the classmates you dont know', 700, 250, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'asks everyone to take a picture and make a funny face.', 700, 300, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'What you do not know is that he has no nice intentions with these photos.', 700, 350, 'center', 'Arial', 30, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'You see everyone sending them too. What are you doing?', 700, 400, 'center', 'Arial', 30, 'white');
        CanvasUtil.drawImage(canvas, this.redButton, 100, 500);
        CanvasUtil.drawImage(canvas, this.yellowButton, 575, 480);
        CanvasUtil.drawImage(canvas, this.blueButton, 1100, 504);
        CanvasUtil.writeTextToCanvas(canvas, 'A: I am sending the photo', 250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'because what could possibly go wrong?', 250, 575, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'B: I am sending the photo', 750, 540, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'I do not really trust it!', 750, 565, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'but everyone sent it', 760, 595, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'so I wll do it too!', 750, 620, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'C: I am not sending the photo', 1250, 550, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'because I do not know him', 1250, 575, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'and do not trust it.', 1250, 600, 'center', 'Arial', 20, 'white');
    }
}