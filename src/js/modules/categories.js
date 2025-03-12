import { createCategoryCard } from "./categoryCard.js";

export function renderCategories() {
  const categories = [
    { name: "Greek", description: "Gods, heroes, and monsters from ancient Greece." },
    { name: "Norse", description: "Legends of Vikings, giants, and the end of the world."},
  ]

  const container = document.createElement("div");
  container.className = "categories-container";

  // Back button
  const backButton = document.createElement("button");
  backButton.id = "back-btn";
  backButton.textContent = "Back to Home";
  container.appendChild(backButton);

  // Render category cards
  categories.forEach((category) => {
    const card = createCategoryCard(category);
    container.appendChild(card);
  });

  return container;
}