import secondBlackMail from './BlackMail2.js';
import CanvasUtil from './CanvasUtil.js';
import secondCursing from './Cursing2.js';
import Images from './Images.js';
import secondImpersonation from './Impersonation2.js';
import KeyListener from './KeyListener.js';
import secondPeerPressure from './PeerPressure2.js';
import Scene from './Scene.js';
export default class Answers extends Scene {
    continue;
    images = [];
    whichCyberProblem;
    result;
    numberToEnd;
    constructor(canvas, result, cyberproblem, numberToEnd) {
        super(canvas);
        this.whichCyberProblem = cyberproblem;
        this.result = result;
        this.numberToEnd = numberToEnd;
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_ENTER)) {
            this.continue = true;
        }
    }
    update(elapsed) {
        if (this.continue) {
            if (this.whichCyberProblem === 'Impersonation') {
                return new secondImpersonation(this.canvas, this.maxX, this.maxY, this.whichCyberProblem, this.numberToEnd);
            }
            else if (this.whichCyberProblem === 'PeerPressure') {
                return new secondPeerPressure(this.canvas, this.maxX, this.maxY, this.whichCyberProblem, this.numberToEnd);
            }
            else if (this.whichCyberProblem === 'Cursing') {
                return new secondCursing(this.canvas, this.maxX, this.maxY, this.whichCyberProblem, this.numberToEnd);
            }
            else if (this.whichCyberProblem === 'Blackmail') {
                return new secondBlackMail(this.canvas, this.maxX, this.maxY, this.whichCyberProblem, this.numberToEnd);
            }
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        if (this.result) {
            this.images.push(new Images(0, 0, CanvasUtil.loadNewImage('./assets/WinnerScreen.png')));
        }
        else {
            this.images.push(new Images(0, 0, CanvasUtil.loadNewImage('./assets/Nope-small.png')));
        }
        CanvasUtil.writeTextToCanvas(canvas, 'Klik op ENTER om naar de volgende vraag te gaan', 1100, 600, 'right', 'Arial', 30, 'green');
        if (this.whichCyberProblem === 'PeerPressure') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Fout! Je kent de persoon niet.', 940, 150, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'omdat de anderen het sturen houdt dat niet in dat jij het ook moet doen.', 1135, 200, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'B: Fout!', 830, 300, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'Juist omdat iedereen het stuurt betekent het niet dat het te vertrouwen is.', 1140, 350, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Juist! Je kent de persoon niet', 940, 400, 'center', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'dus weet je eigenlijk niet wie het is. Het kan allemaal nep zijn.', 1100, 450, 'center', 'Arial', 20, 'green');
        }
        else if (this.whichCyberProblem === 'Blackmail') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Juist! Dit is een serieuze vorm van online Cyberbullying', 1070, 150, 'center', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'en kan in sommige gevallen zelfs bij de Politie terechtkomen.', 1110, 200, 'center', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'B: Helaas! Iemand die zich voordoet als jij', 1000, 250, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'moet je altijd direct aangeven, voordat hij schade kan aanrichten.', 1125, 300, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Helaas! Je kunt beter voor antwoord B kiezen', 1030, 350, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'omdat hij zo gewoon door kan gaan met jou na-apen.', 1075, 400, 'center', 'Arial', 20, 'white');
        }
        else if (this.whichCyberProblem === 'Cursing') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Helaas!', 850, 100, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'Als je gewoon een ander spel gaat spelen, los je het probleem niet op.', 1130, 150, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'B: Helaas! Terug uit schelden lost niets op.', 990, 200, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'Als iemand dit ziet, kan je allebei verwijderd worden van het spel!', 1120, 250, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Juist!', 840, 300, 'center', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'Zo kunnen de staff/moderators het oplossen en kan jij je spel verder spelen.', 1170, 350, 'center', 'Arial', 20, 'green');
        }
        else if (this.whichCyberProblem === 'Impersonation') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Helaas! Iemand die zich voordoet als jij', 1050, 150, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'moet je altijd direct aangeven, voordat hij schade kan aanrichten.', 1100, 200, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'B: Juist! Dit is een serieuze vorm van online Cyberbullying', 1075, 250, 'center', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'en kan in sommige gevallen zelfs bij de Politie terechtkomen.', 1075, 300, 'center', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Helaas! Je kunt beter voor antwoord B kiezen', 1025, 350, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'omdat hij zo gewoon door kan gaan met jou na-apen.', 1050, 400, 'center', 'Arial', 20, 'white');
        }
        this.images.forEach((image) => image.render(canvas));
    }
}
//# sourceMappingURL=Answers.js.map