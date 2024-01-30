import CanvasUtil from './CanvasUtil';
import KeyListener from './KeyListener';
import Scene from './Scene';
import Images from './Images';
import Introduction from './Introduction';

export default class Instruction extends Scene {
  public continue: boolean;

  public images: Images[] = [];

  private name: string;

  public constructor(canvas: HTMLCanvasElement) {
    super(canvas)
    this.images.push(new Images(300, -250, CanvasUtil.loadNewImage('./assets/Quizzaria-Logo-Png.png')))
    this.images.push(new Images(100, 200, CanvasUtil.loadNewImage('./assets/wasd-no-bg.png')))
    this.images.push(new Images(800, 350, CanvasUtil.loadNewImage('./assets/wizardNpc.png')))
    this.images.push(new Images(900, 350, CanvasUtil.loadNewImage('./assets/bluehairNpc.png')))
    this.images.push(new Images(1000, 350, CanvasUtil.loadNewImage('./assets/greenhairNpc.png')))
    this.images.push(new Images(1100  , 350, CanvasUtil.loadNewImage('./assets/oldmanNpc.png')))
  }

  public getName(): string {
    return this.name
  }

  public processInput(keyListener: KeyListener) {
    if (keyListener.keyPressed(KeyListener.KEY_ENTER)) { this.continue = true }
  }

  public update(elapsed: number): Scene {
    if (this.continue) {
      return new Introduction(this.canvas)
    }
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    this.images.forEach((image: Images) => image.render(canvas))
    CanvasUtil.writeTextToCanvas(canvas, 'use the arrow keys or', 300, 500, 'center', 'Arial', 40, 'white');
    CanvasUtil.writeTextToCanvas(canvas, 'w a s d to move', 300, 550, 'center', 'Arial', 40, 'white');
    CanvasUtil.writeTextToCanvas(canvas, 'these are teachers', 1000, 500, 'center', 'Arial', 40, 'white');
    CanvasUtil.writeTextToCanvas(canvas, 'press [space] to go to his/her quiz', 1000, 550, 'center', 'Arial', 40, 'white');
    CanvasUtil.writeTextToCanvas(canvas, 'press [enter] to continue', 775, 650, 'center', 'Arial', 60, 'red');
  }
}