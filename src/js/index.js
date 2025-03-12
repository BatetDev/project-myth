import "../styles/main.css";

import { renderHero } from "./modules/hero.js";
import { renderCategories } from "./modules/categories.js";


// Render hero section by default
let heroElement = renderHero();
document.body.appendChild(heroElement);

// Function to handle navigation back to hero/home section
function showHeroSection() {
  // Remove any existing content
  document.body.innerHTML = "";

  // Re-render hero section
  heroElement = renderHero();
  document.body.appendChild(heroElement);
}

// Add Explore Myths button event listener
document.addEventListener("click", (event) => {
  if (event.target.id === "explore-btn") {
    // Remove hero section
    document.body.removeChild(heroElement);

    // Render categories section
    const categoriesElement = renderCategories();
    document.body.appendChild(categoriesElement);

    // Add event listener for Back button
    document.querySelector("#back-btn").addEventListener("click", showHeroSection);
  }
});