import CanvasUtil from './CanvasUtil';
import KeyListener from './KeyListener';
import Scene from './Scene';
import Images from './Images.js'; 
import GameHub from './Hub'
import Start from './Start';

export default class Endscreen extends Scene{
  public starting: boolean;

  public images: Images[] = [];

  private name: string;

  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.images.push(new Images(300, -250, CanvasUtil.loadNewImage('./assets/Quizzaria-Logo-Png.png')))
    document.getElementById('body').style.backgroundImage = "url(./assets/BackGround.png"
  }

  public getName(): string {
    return this.name
  }

  processInput(keyListener: KeyListener) {
    
    if (keyListener.keyPressed(KeyListener.KEY_ENTER)) {this.starting = true}
  } 

  public update(elapsed: number): Scene {
    if (this.starting) {
      return new Start(this.canvas);
    }
    return null
  }

  public render(canvas: HTMLCanvasElement): void {
    this.images.forEach((image: Images) => image.render(canvas))
    CanvasUtil.writeTextToCanvas(canvas, 'Winner', 775, 650, 'center', 'Arial', 100, 'red');
  }
}