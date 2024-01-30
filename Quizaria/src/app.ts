import Quizaria from './Quizaria.js';
import { GameLoop } from './GameLoop.js';

const game = new Quizaria(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
  gameLoop.start();
});
