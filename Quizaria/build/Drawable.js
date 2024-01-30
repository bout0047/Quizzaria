import CanvasUtil from './CanvasUtil.js';
export class Drawable {
    image;
    posX;
    posY;
    getposY() {
        return this.posY;
    }
    getposX() {
        return this.posX;
    }
    getHeight() {
        return this.image.height;
    }
    getWidth() {
        return this.image.width;
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
    }
}
//# sourceMappingURL=Drawable.js.map