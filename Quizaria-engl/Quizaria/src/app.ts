import Quizaria from './Quizaria';
import { GameLoop } from './GameLoop';

const game = new Quizaria(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
  gameLoop.start();
});
