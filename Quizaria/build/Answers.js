import secondBlackMail from './BlackMail2.js';
import CanvasUtil from './CanvasUtil.js';
import secondCursing from './Cursing2.js';
import Images from './Images.js';
import secondImpersonation from './Impersonation2.js';
import KeyListener from './KeyListener.js';
import secondPeerPressure from './PeerPressure2.js';
import Scene from './Scene.js';
export default class Answers extends Scene {
    continue;
    images = [];
    whichCyberProblem;
    result;
    numberToEnd;
    constructor(canvas, result, cyberproblem, numberToEnd) {
        super(canvas);
        this.whichCyberProblem = cyberproblem;
        this.result = result;
        this.numberToEnd = numberToEnd;
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_ENTER)) {
            this.continue = true;
        }
    }
    update(elapsed) {
        if (this.continue) {
            if (this.whichCyberProblem === 'Impersonation') {
                return new secondImpersonation(this.canvas, this.maxX, this.maxY, this.whichCyberProblem, this.numberToEnd);
            }
            else if (this.whichCyberProblem === 'PeerPressure') {
                return new secondPeerPressure(this.canvas, this.maxX, this.maxY, this.whichCyberProblem, this.numberToEnd);
            }
            else if (this.whichCyberProblem === 'Cursing') {
                return new secondCursing(this.canvas, this.maxX, this.maxY, this.whichCyberProblem, this.numberToEnd);
            }
            else if (this.whichCyberProblem === 'Blackmail') {
                return new secondBlackMail(this.canvas, this.maxX, this.maxY, this.whichCyberProblem, this.numberToEnd);
            }
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        if (this.result) {
            this.images.push(new Images(0, 0, CanvasUtil.loadNewImage('./assets/WinnerScreen.png')));
        }
        else {
            this.images.push(new Images(0, 0, CanvasUtil.loadNewImage('./assets/Nope-small.png')));
        }
        CanvasUtil.writeTextToCanvas(canvas, 'Press [enter] to continue to the island!', 1100, 600, 'right', 'Arial', 50, 'green');
        if (this.whichCyberProblem === 'PeerPressure') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Wrong! You do not know the person', 830, 150, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'because other people send it does not mean you should', 830, 200, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'B: Wrong', 830, 300, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'Just because everyone sends it does not mean it can be trusted', 830, 350, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Right! You do not know the person', 830, 400, 'left', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'So you do not know who it is. It could all be fake.', 830, 450, 'left', 'Arial', 20, 'green');
        }
        else if (this.whichCyberProblem === 'Blackmail') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Right! This is a serious form of online cyberbullying.', 830, 150, 'left', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'and in some cases could be reported to the police.', 830, 200, 'left', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'B: Sorry! Somebody who is pretending to be you', 830, 250, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'should always be reported before they are able to do dagamge', 830, 300, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Wrong! Your better option was answer B', 830, 350, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'Because he now continues copying you', 830, 400, 'left', 'Arial', 20, 'white');
        }
        else if (this.whichCyberProblem === 'Cursing') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Sorry!', 850, 100, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'If you play another game, it will not fix the problem', 830, 150, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'B: Nope! Cursing back at him wil not fix anyting', 830, 200, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'If somebody notices, you could both be removed from the game', 830, 250, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Right!', 830, 300, 'left', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'The staff can handle it further and you can kepe playing the game', 830, 350, 'left', 'Arial', 20, 'green');
        }
        else if (this.whichCyberProblem === 'Impersonation') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Sorry! Somebody pretending to be you', 830, 150, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'should always be reported, before hij damages you reputation', 830, 200, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'B: right! This is a serious form of cyberbullying', 830, 250, 'left', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'and can even be reported to the police', 830, 300, 'left', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Nope! Answer B would have been a better options', 830, 350, 'left', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'because hij just continues copying you', 830, 400, 'left', 'Arial', 20, 'white');
        }
        this.images.forEach((image) => image.render(canvas));
    }
}
//# sourceMappingURL=Answers.js.map