import KeyListener from './KeyListener.js';

export default abstract class Scene {
  protected maxX: number;

  protected maxY: number;

  protected canvas: HTMLCanvasElement;

  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.maxX = this.canvas.width;
    this.maxY = this.canvas.height;
  }

  public abstract processInput(keyListener: KeyListener): void;
  public abstract update(elapsed: number): Scene;
  public abstract render(canvas: HTMLCanvasElement): void;
}
