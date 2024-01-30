import CanvasUtil from './CanvasUtil.js';
import { Drawable } from './Drawable.js';
export default class Player extends Drawable {
    speed;
    questionsAnswered;
    constructor(maxX, maxY) {
        super();
        this.speed = 5;
        this.posX = maxX / 2 - 192 / 4 / 2;
        this.posY = maxY / 2 - 68 / 2;
        this.image = CanvasUtil.loadNewImage('./assets/singlePlayerDown.png');
    }
    collidesWithNPC(item) {
        return (this.posX + this.getWidth() > item.getposX() &&
            this.posX < item.getposX() + item.getWidth() &&
            this.posY + this.getHeight() > item.getposY() &&
            this.posY < item.getposY() + item.getHeight());
    }
    move(direction, minX, minY, maxX, maxY) {
        if (direction === 0) {
            if (this.posY - this.speed > minY)
                this.posY -= this.speed;
            this.image = CanvasUtil.loadNewImage('./assets/singlePlayerUp.png');
        }
        if (direction === 1) {
            if (this.posX + this.speed + this.getWidth() < maxX)
                this.posX += this.speed;
            this.image = CanvasUtil.loadNewImage('./assets/singlePlayerRight.png');
        }
        if (direction === 2) {
            if (this.posY + this.speed + this.getHeight() < maxY)
                this.posY += this.speed;
            this.image = CanvasUtil.loadNewImage('./assets/singlePlayerDown.png');
        }
        if (direction === 3) {
            if (this.posX - this.speed > minX)
                this.posX -= this.speed;
            this.image = CanvasUtil.loadNewImage('./assets/singlePlayerLeft.png');
        }
    }
    isGameFinished() {
        const amountColliding = 1;
    }
}
//# sourceMappingURL=Player.js.map