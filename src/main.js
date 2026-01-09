import { Engine } from './core/Engine.js';
import mode from './modes/js/classic.js';

const engine = new Engine({ mode, language: 'js' });
engine.start();
