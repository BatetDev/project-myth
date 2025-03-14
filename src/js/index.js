import "../styles/main.css";

import { renderHero } from "./modules/hero.js";
import { renderTags } from "./modules/tags.js";

// Render hero section by default
let heroElement = renderHero();
document.body.appendChild(heroElement);

// Function to handle navigation back to hero/home section
function showHeroSection() {
  document.body.innerHTML = "";
  heroElement = renderHero();
  document.body.appendChild(heroElement);
}

// Add Explore Myths button event listener
document.addEventListener("click", (event) => {
  if (event.target.id === "explore-btn") {
    // Remove the hero section
    document.body.removeChild(heroElement);

    // Render the tags container
    const tagsElement = renderTags();
    document.body.appendChild(tagsElement);

    // Add event listener for the "Back" button
    document
      .getElementById("back-btn")
      .addEventListener("click", showHeroSection);
  }
});
