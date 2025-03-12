export function renderCategories() {
  const categories = [
    { name: "Greek", description: "Gods, heroes, and monsters from ancient Greece." },
    { name: "Norse", description: "Legends of Vikings, giants, and the end of the world."},
  ]

  const container = document.createElement("div");
  container.className = "categories-container";

  categories.forEach((category) => {
    const card = document.createElement("div");
    card.className = "category-card";
    card.innerHTML = `
      <h3>${category.name}</h3>
      <p>${category.description}</p>
      `;
    container.appendChild(card);
  });

  return container;
}