import { Drawable}  from './Drawable';

export default class Images extends Drawable {
  public constructor(startX: number, startY: number, image: HTMLImageElement) {
    super();
    this.posX = startX;
    this.posY = startY;
    this.image = image;
  }
}