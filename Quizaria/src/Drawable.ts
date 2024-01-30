import CanvasUtil from './CanvasUtil.js';

export abstract class Drawable {
    protected image: HTMLImageElement;

    protected posX: number;

    protected posY: number;

    public getposY(): number {
        return this.posY;
    }

    public getposX(): number {
        return this.posX;
    }

    public getHeight(): number {
        return this.image.height;
    }

    public getWidth(): number {
        return this.image.width;
    }

    public render(canvas: HTMLCanvasElement): void {
        CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
    }
}