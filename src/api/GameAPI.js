import { parseTemplate } from '../core/TemplateParser.js';
import lists from '../data/lists.json' assert { type: 'json' };

export class GameAPI {
  getPlayers() {
    return [{ id: 1, name: 'Player 1' }];
  }

  getCurrentPlayer() {
    return this.getPlayers()[0];
  }

  getRandomTemplate() {
    return 'Do %5,20% {pushups|squats|burpees} while wearing #clothing#';
  }

  parseDare(tpl) {
    return parseTemplate(tpl, lists);
  }

  showMessage(msg) {
    document.getElementById('app').innerText = msg;
  }
}
