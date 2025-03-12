import "../styles/main.css";

import { renderHero } from "./modules/hero.js";
import { renderCategories } from "./modules/categories.js";


// Render hero section by default
const heroElement = renderHero();
document.body.appendChild(heroElement);

// Add "Explore Myths" button event listener
document.querySelector("#explore-btn").addEventListener("click", () => {
  // Remove hero section
  document.body.removeChild(heroElement);

  // Render categories section
  const categoriesElement = renderCategories();
  document.body.appendChild(categoriesElement);
});