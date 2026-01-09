import { GameAPI } from '../api/GameAPI.js';

export class Engine {
  constructor({ mode, language }) {
    this.mode = mode;
    this.language = language;
    this.api = new GameAPI(this);
  }

  start() {
    this.mode(this.api);
  }
}
