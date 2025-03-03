import "../styles/main.css";

import { greet } from './modules/utils.js';
console.log(greet("Myth Project!"));

import { renderHero } from "./modules/hero.js";

document.body.prepend(renderHero());