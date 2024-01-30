import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import Player from './Player.js';
import NPC from './NPC.js';
import CanvasUtil from './CanvasUtil.js';
import PeerPressure from './PeerPressure.js';
import BlackMail from './BlackMail.js';
import Impersonation from './Impersonation.js';
import Cursing from './Cursing.js';
import Endscreen from './Endscreen.js';
export default class Hub extends Scene {
    player;
    NPC = [];
    score;
    images;
    newScene;
    cyberProblem;
    talkBoxShow;
    amountColliding;
    numberToEnd;
    constructor(canvas, numberToEnd) {
        super(canvas);
        this.score = 0;
        this.player = new Player(this.maxX, this.maxY);
        this.newScene = null;
        document.getElementById('body').style.backgroundImage = "url(./assets/Gamehub-background.png)";
        this.cyberProblem = '';
        this.NPC.push(new NPC(544, 341.5, './assets/wizardNpc.png'));
        this.NPC.push(new NPC(984, 251.5, './assets/bluehairNpc.png'));
        this.NPC.push(new NPC(1154, 301.5, './assets/greenhairNpc.png'));
        this.NPC.push(new NPC(850, 531.5, './assets/oldmanNpc.png'));
        this.talkBoxShow = false;
        this.numberToEnd = numberToEnd;
        this.numberToEnd += 1;
    }
    processInput(keyListener) {
        const minX = 324;
        const minY = 143.5;
        const maxX = 1204;
        const maxY = 600.5;
        if (keyListener.isKeyDown(KeyListener.KEY_UP)) {
            this.player.move(0, minX, minY, maxX, maxY);
        }
        if (keyListener.isKeyDown(KeyListener.KEY_RIGHT)) {
            this.player.move(1, minX, minY, maxX, maxY);
        }
        if (keyListener.isKeyDown(KeyListener.KEY_DOWN)) {
            this.player.move(2, minX, minY, maxX, maxY);
        }
        if (keyListener.isKeyDown(KeyListener.KEY_LEFT)) {
            this.player.move(3, minX, minY, maxX, maxY);
        }
        if (keyListener.isKeyDown(KeyListener.KEY_W)) {
            this.player.move(0, minX, minY, maxX, maxY);
        }
        if (keyListener.isKeyDown(KeyListener.KEY_D)) {
            this.player.move(1, minX, minY, maxX, maxY);
        }
        if (keyListener.isKeyDown(KeyListener.KEY_S)) {
            this.player.move(2, minX, minY, maxX, maxY);
        }
        if (keyListener.isKeyDown(KeyListener.KEY_A)) {
            this.player.move(3, minX, minY, maxX, maxY);
        }
        this.amountColliding = 0;
        this.NPC.forEach((NPC) => {
            if (!this.player.collidesWithNPC(NPC)) {
                this.amountColliding += 1;
            }
            if (this.amountColliding === 4) {
                this.talkBoxShow = false;
            }
            else {
                this.talkBoxShow = true;
                this.images = CanvasUtil.loadNewImage('./assets/BigTalkBox.png');
                if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
                    if (this.player.getposX() + this.player.getWidth() > 535 && this.player.getposX() < 544.5 + 50 &&
                        this.player.getposY() + this.player.getHeight() > 341.5 && this.player.getposY() < 341.5 + 100) {
                        this.newScene = new PeerPressure(this.canvas, this.maxX, this.maxY, 'PeerPressure', this.numberToEnd);
                    }
                    else if (this.player.getposX() + this.player.getWidth() > 970 && this.player.getposX() < 984 + 50 &&
                        this.player.getposY() + this.player.getHeight() > 241.5 && this.player.getposY() < 251.5 + 100) {
                        this.newScene = new BlackMail(this.canvas, this.maxX, this.maxY, 'Blackmail', this.numberToEnd);
                    }
                    else if (this.player.getposX() + this.player.getWidth() > 1140 && this.player.getposX() < 1154 + 50 &&
                        this.player.getposY() + this.player.getHeight() > 280.5 && this.player.getposY() < 301.5 + 100) {
                        this.newScene = new Impersonation(this.canvas, this.maxX, this.maxY, 'Impersonation', this.numberToEnd);
                    }
                    else if (this.player.getposX() + this.player.getWidth() > 840 && this.player.getposX() < 854 + 50 &&
                        this.player.getposY() + this.player.getHeight() > 520 && this.player.getposY() < 531.5 + 100) {
                        this.newScene = new Cursing(this.canvas, this.maxX, this.maxY, 'Cursing', this.numberToEnd);
                    }
                }
            }
        });
    }
    update(elapsed) {
        console.log(this.numberToEnd);
        if (this.numberToEnd === 5) {
            return new Endscreen(this.canvas);
        }
        return this.newScene;
    }
    getCyberProblem() {
        return this.cyberProblem;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        this.NPC.forEach((NPC) => NPC.render(canvas));
        this.player.render(canvas);
        if (this.talkBoxShow) {
            CanvasUtil.drawImage(canvas, this.images, 0, canvas.height - this.images.height);
            CanvasUtil.writeTextToCanvas(canvas, "", 300, 500, 'center', 'Airal', 20, 'black');
            CanvasUtil.writeTextToCanvas(canvas, 'press [space] to talk to the teachers', 700, 650, 'center', 'Airal', 40, 'black');
        }
    }
}
//# sourceMappingURL=Hub.js.map