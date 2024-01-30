import secondBlackMail from './BlackMail2';
import CanvasUtil from './CanvasUtil';
import secondCursing from './Cursing2';
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

export default class Answers extends Scene {

  private continue: boolean;

  private images: Images[] = [];

  private whichCyberProblem: string;

  private result: boolean;

  private numberToEnd: number;

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
      if (this.whichCyberProblem === 'Impersonation') {
        return new secondImpersonation(this.canvas, this.maxX, this.maxY, this.whichCyberProblem, this.numberToEnd)
      } else if (this.whichCyberProblem === 'PeerPressure') {
        return new secondPeerPressure(this.canvas, this.maxX, this.maxY, this.whichCyberProblem, this.numberToEnd);
      } else if (this.whichCyberProblem === 'Cursing') {
        return new secondCursing(this.canvas, this.maxX, this.maxY, this.whichCyberProblem, this.numberToEnd);
      } else if (this.whichCyberProblem === 'Blackmail') {
        return new secondBlackMail(this.canvas, this.maxX, this.maxY, this.whichCyberProblem, this.numberToEnd);
      }
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
    CanvasUtil.writeTextToCanvas(canvas, 'Click Enter to go to the next question', 1100, 600, 'right', 'Arial', 30, 'green');
    if (this.whichCyberProblem === 'PeerPressure') {
        CanvasUtil.writeTextToCanvas(canvas, 'A: Wrong! You do not know the person.', 940, 150, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'just because the others are sending it does not mean you have to do it too.', 1135, 200, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'B: Error!', 830, 300, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Just because everyone sends it does not mean it can be trusted.', 1140, 350, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'C: Right! You do not know the person', 940, 400, 'center', 'Arial', 20, 'green');
        CanvasUtil.writeTextToCanvas(canvas, 'so you do not really know who it is. It could all be fake.', 1100, 450, 'center', 'Arial', 20, 'green');
      } else if (this.whichCyberProblem === 'Blackmail') {
        CanvasUtil.writeTextToCanvas(canvas, 'A: Right! This is serious online Cyberbullying', 1070, 150, 'center', 'Arial', 20, 'green');
        CanvasUtil.writeTextToCanvas(canvas, 'and may even end up with the Police in some cases.', 1110, 200, 'center', 'Arial', 20, 'green');
        CanvasUtil.writeTextToCanvas(canvas, 'B: Alas! Someone pretending to be you', 1000, 250, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'always must be reported immediately before it can cause damage.', 1125, 300, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'C: Sorry! You better choose answer B', 1030, 350, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'because he can go on copying you like this.', 1075, 400, 'center', 'Arial', 20, 'white');
      } else if (this.whichCyberProblem === 'Cursing') {
        CanvasUtil.writeTextToCanvas(canvas, 'A: Unfortunately!', 850, 100, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Just playing another game will not solve the problem.', 1130, 150, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'B: Unfortunately! Swearing back does not solve anything.', 990, 200, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'If someone notices this, you could both be kicked from the game!', 1120, 250, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'C: Right!', 840, 300, 'center', 'Arial', 20, 'green');
        CanvasUtil.writeTextToCanvas(canvas, 'So the staff/moderators can fix it and you can continue your game.', 1170, 350, 'center', 'Arial', 20, 'green');
      } else if (this.whichCyberProblem === 'Impersonation') {
        CanvasUtil.writeTextToCanvas(canvas, 'A: Wrong! Someone pretending to be you', 1050, 150, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'always must be reported immediately before it can cause damage.', 1100, 200, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'B: Right! This is serious online Cyberbullying', 1075, 250, 'center', 'Arial', 20, 'green');
        CanvasUtil.writeTextToCanvas(canvas, 'and in some cases may even end up with the Police.', 1075, 300, 'center', 'Arial', 20, 'green');
        CanvasUtil.writeTextToCanvas(canvas, 'C: Sorry! You better choose answer B', 1025, 350, 'center', 'Arial', 20, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'because he can continue copying you like this.', 1050, 400, 'center', 'Arial', 20, 'white');
    }
    this.images.forEach((image: Images) => image.render(canvas))
  }
}
