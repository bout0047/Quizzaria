import CanvasUtil from './CanvasUtil.js';
import Endscreen from './Endscreen.js';
import { Game } from './GameLoop.js';
import GameHub from './Hub.js';
import Images from './Images.js';
import secondImpersonation from './Impersonation2.js';
import Impersonation from './Impersonation2.js';
import KeyListener from './KeyListener.js';
import PeerPressure from './PeerPressure.js';
import secondPeerPressure from './PeerPressure2.js';
import Scene from './Scene.js';
import SceneStart from './Start.js';

export default class secondAnswers extends Scene {

    private continue: boolean;

    private images: Images[] = [];

    private whichCyberProblem: string;

    private result: boolean;

    private numberToEnd: number

    public constructor(canvas: HTMLCanvasElement, result: boolean, cyberproblem: string, numberToEnd: number) {
        super(canvas);
        this.whichCyberProblem = cyberproblem;
        this.result = result;
        this.numberToEnd = numberToEnd;
    }

    public processInput(keyListener: KeyListener): void {
        if (keyListener.keyPressed(KeyListener.KEY_ENTER)) { this.continue = true; }
    }

    public update(elapsed: number): Scene {
        if (this.continue) {
            return new GameHub(this.canvas, this.numberToEnd)
        }
        return null;
    }

    /**
     *
     * @param canvas lekker
     */
    public render(canvas: HTMLCanvasElement): void {
        CanvasUtil.clearCanvas(canvas);
        if (this.result) {
            this.images.push(new Images(0, 0, CanvasUtil.loadNewImage('./assets/WinnerScreen.png')))
        } else {
            this.images.push(new Images(0, 0, CanvasUtil.loadNewImage('./assets/Nope-small.png')))
        }
        CanvasUtil.writeTextToCanvas(canvas, 'Press [enter] to continue to the island!', 1100, 600, 'right', 'Arial', 30, 'green');
        if (this.whichCyberProblem === 'PeerPressure') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Right! You do not know the person', 830, 150, 'left', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'So you do not know who it is, it could all be fake.', 830, 200, 'left', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'B: Wrong!', 830, 300, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'Because everyone sends it, does not mean it could be trusted', 830, 350, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Nope! You do not know the person', 830, 400, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'because the other people send it, does not mean you should', 830, 450, 'left', 'Arial', 20, 'white');
        } else if (this.whichCyberProblem === 'Blackmail') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Nope! They will probably to do it again', 830, 150, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'This will not solve anything', 830, 200, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'B: Corrrct! You should always report', 830, 250, 'left', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'if someone is threatening you to your parents', 830, 300, 'left', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Nope! Your better option was options B', 830, 350, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'Because they will not listen to you', 830, 400, 'left', 'Arial', 20, 'white');
        } else if (this.whichCyberProblem === 'Cursing') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Wrong! Cursing yourself is not good', 830, 100, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'B would have been better, do not pay attention to curses', 830, 150, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'B: Correct! The admis will fix this problemDe staff/admins zullen dit verder oplossen', 830, 200, 'left', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'jou can continue to play the game', 830, 250, 'left', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Sorry! If you do nothing to fix it', 830, 300, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'the problem will presist, even if you play another game', 830, 350, 'left', 'Arial', 20, 'white ');
        } else if (this.whichCyberProblem === 'Impersonation') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Sorry! The person may be famous, the account may be hacked', 830, 150, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'and a famous person is not always trustworthy', 830, 200, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'B: maybe safe for you, but not for your friends, dont do this', 830, 250, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Right! This is the best option, your data will not get compromised', 830, 300, 'left', 'Arial', 20, 'green');
        }
        this.images.forEach((image: Images) => image.render(canvas))
    }
}
