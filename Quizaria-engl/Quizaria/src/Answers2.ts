import CanvasUtil from './CanvasUtil';
import Endscreen from './Endscreen';
import { Game } from './GameLoop';
import GameHub from './Hub';
import Images from './Images';
import secondImpersonation from './Impersonation2';
import Impersonation from './Impersonation2';
import KeyListener from './KeyListener';
import PeerPressure from './PeerPressure';
import secondPeerPressure from './PeerPressure2';
import Scene from './Scene';
import SceneStart from './Start';

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
        CanvasUtil.writeTextToCanvas(canvas, 'Click ENTER to return to the island', 1100, 600, 'right', 'Arial', 30, 'green');
        if (this.whichCyberProblem === 'PeerPressure') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Right! You do not know the person', 940, 150, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'so you do not really know who it is. It could all be fake.', 1135, 200, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'B: Wrong!', 830, 300, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'Just because everyone sends it does not mean it can be trusted.', 1140, 350, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Wrong! You do not know the person.', 940, 400, 'center', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'just because the others are sending it does not mean you have to do it too.', 1100, 450, 'center', 'Arial', 20, 'green');
        } else if (this.whichCyberProblem === 'Blackmail') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Right! This is serious online Cyberbullying', 1070, 150, 'center', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'and may even end up with the Police in some cases.', 1110, 200, 'center', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'B: Wrong! Someone pretending to be you', 1000, 250, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'always must be declared immediately before it can do damage.', 1125, 300, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Wrong! You could choose answer B', 1030, 350, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'because he can go on copying you like this.', 1075, 400, 'center', 'Arial', 20, 'white');
        } else if (this.whichCyberProblem === 'Cursing') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Wrong! In this scenario, swearing back is not useful.', 1060, 100, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'You could better choose solution B and ignore the behavior.', 1150, 150, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'B: Correct! The staff/admins will resolve this further', 1060, 200, 'center', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'so you can continue your game.', 1000, 250, 'center', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Wrong! If you do nothing about the problem', 1020, 300, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'it will happen again on another game. Solution B is better in this case.', 1170, 350, 'center', 'Arial', 20, 'white ');
        } else if (this.whichCyberProblem === 'Impersonation') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Wrong! The person may be known, but the account may have been hacked', 1136, 150, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'and a famous person is not always trustworthy!', 1050, 200, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'B: This maybe safe for you, but not for your friends!', 1135, 250, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Right! Simple, but this is the best option. That way your data will not be compromised.', 1165, 300, 'center', 'Arial', 20, 'green');
        }
        this.images.forEach((image: Images) => image.render(canvas))
    }
}