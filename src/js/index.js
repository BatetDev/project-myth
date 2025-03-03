import "../styles/main.css";

import { greet } from './modules/utils.js';
console.log(greet("Myth Project!"));

import { renderHero } from "./modules/hero.js";
import { renderMythCards } from "./modules/mythCards.js";

document.body.prepend(renderHero());

document.body.appendChild(renderMythCards());