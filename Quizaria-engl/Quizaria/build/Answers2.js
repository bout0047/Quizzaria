import CanvasUtil from './CanvasUtil.js';
import GameHub from './Hub.js';
import Images from './Images.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
export default class secondAnswers extends Scene {
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
            return new GameHub(this.canvas, this.numberToEnd);
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
        CanvasUtil.writeTextToCanvas(canvas, 'Klik op ENTER om terug naar het eiland te gaan', 1100, 600, 'right', 'Arial', 30, 'green');
        if (this.whichCyberProblem === 'PeerPressure') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Juist! Je kent de persoon niet', 940, 150, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'dus weet je eigenlijk niet wie het is. Het kan allemaal nep zijn.', 1135, 200, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'B: Fout!', 830, 300, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'Juist omdat iedereen het stuurt betekent het niet dat het te vertrouwen is.', 1140, 350, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Fout! Je kent de persoon niet.', 940, 400, 'center', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'omdat de anderen het sturen houdt dat niet in dat jij het ook moet doen.', 1100, 450, 'center', 'Arial', 20, 'green');
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
            CanvasUtil.writeTextToCanvas(canvas, 'A: Helaas! In dit scenario is terugschelden niet handig.', 1060, 100, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'Je kunt beter oplossing B kiezen en geen aandacht geven aan het gedrag.', 1150, 150, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'B: Correct! De staff/admins zullen dit verder oplossen', 1060, 200, 'center', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'zodat jij verder kunt gaan met je spelletje.', 1000, 250, 'center', 'Arial', 20, 'green');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Helaas! Als je niets aan het probleem doet', 1020, 300, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'zal het bij een ander spel opnieuw gebeuren. Oplossing B is beter in dit geval.', 1170, 350, 'center', 'Arial', 20, 'white ');
        }
        else if (this.whichCyberProblem === 'Impersonation') {
            CanvasUtil.writeTextToCanvas(canvas, 'A: Helaas! De persoon kan bekend zijn, maar het account kan gehackt zijn', 1136, 150, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'en een bekend persoon is niet altijd betrouwbaar!', 1050, 200, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'B: Misschien wel veilig voor jou, maar niet voor je vrienden! Niet doen dus.', 1135, 250, 'center', 'Arial', 20, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'C: Juist! Simpel, maar dat is de beste optie. Zo raken je gegevens niet in gevaar.', 1165, 300, 'center', 'Arial', 20, 'green');
        }
        this.images.forEach((image) => image.render(canvas));
    }
}
//# sourceMappingURL=Answers2.js.map