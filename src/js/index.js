import "../styles/main.css";
import "../styles/myth-card.css";

import { renderHero } from "./modules/hero.js";
import { renderTags } from "./modules/tags.js";
import { filterMyths } from "./modules/filter.js";
import { renderMythCards } from "./modules/mythCards.js";
import myths from "../data/myths.json"; // Import the dataset

// Render hero section by default
let heroElement = renderHero();
document.body.appendChild(heroElement);

// Function to handle navigation back to hero/home section
function showHeroSection() {
  document.body.innerHTML = "";
  heroElement = renderHero();
  document.body.appendChild(heroElement);
}

// Track selected tags
let selectedTags = [];

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

    // Add event listeners for tag buttons
    document.querySelectorAll(".tag-button").forEach((button) => {
      button.addEventListener("click", () => {
        const tag = button.textContent;

        // Toggle tag selection
        if (selectedTags.includes(tag)) {
          selectedTags = selectedTags.filter((t) => t !== tag);
        } else {
          selectedTags.push(tag);
        }

        // Highlight active tags
        button.classList.toggle("active");

        // Filter myths based on selected tags
        const filteredMyths = filterMyths(myths, selectedTags);

        // Clear existing myth cards and render new ones
        document.body.querySelector(".card-container")?.remove();
        if (filteredMyths.length > 0) {
          const mythCardsElement = renderMythCards(filteredMyths);
          document.body.appendChild(mythCardsElement);
        }
      });
    });
  }
});
