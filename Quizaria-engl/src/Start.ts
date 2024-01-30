import CanvasUtil from './CanvasUtil';
import KeyListener from './KeyListener';
import Scene from './Scene';
import Images from './Images';
import GameHub from './Hub'
import Instruction from './Instructions';

export default class Start extends Scene {
  public starting: boolean;

  public images: Images[] = [];

  private name: string;

  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.images.push(new Images(300, -250, CanvasUtil.loadNewImage('./assets/Quizzaria-Logo-Png.png')))
  }

  public getName(): string {
    return this.name
  }

  processInput(keyListener: KeyListener) {
    if (keyListener.keyPressed(KeyListener.KEY_ENTER)) { this.starting = true }
  }

  public update(elapsed: number): Scene {
    if (this.starting) {
      return new Instruction(this.canvas)
    }
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    this.images.forEach((image: Images) => image.render(canvas))
    CanvasUtil.writeTextToCanvas(canvas, 'press [enter] to start', 775, 650, 'center', 'Arial', 60, 'red');
  }
}