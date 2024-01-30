import CanvasUtil from "./CanvasUtil.js";
import { Drawable } from "./Drawable.js";

export default class NPC extends Drawable {
    public name: string;

    public constructor(posX: number, posY: number, image: string) {
        super()
        this.posX = posX;
        this.posY = posY;
        this.name = this.randomName();
        this.image = CanvasUtil.loadNewImage(image);
    }

    public randomName(): string {
        const randomnumber = Math.floor(Math.random() * 10)
        let name = ''
        if (randomnumber === 0) {
            name = 'Nick'
        } else if (randomnumber === 1) {
            name = 'Karel'
        } else if (randomnumber === 2) {
            name = 'Mohammed'
        } else if (randomnumber === 3) {
            name = 'Yuko'
        } else if (randomnumber === 4) {
            name = 'Baksteen'
        } else if (randomnumber === 5) {
            name = 'Christian'
        } else if (randomnumber === 6) {
            name = 'Ahmed'
        } else if (randomnumber === 7) {
            name = 'Eduardo'
        } else if (randomnumber === 8) {
            name = 'Maximiliano'
        } else if (randomnumber === 9) {
            name = 'Yusuf'
        } else if (randomnumber === 10) {
            name = 'Rico'
        }
        return name;
    }

    public getName(): string {
        return this.name;
    }
}