export function createCategoryCard(category) {
  const card = document.createElement("div");
  card.className = "category-card";
  card.innerHTML = `
    <h3>${category.name}</h3>
    <p>${category.description}</p>
  `;

  // Add click event to navigate myth cards
  card.addEventListener("click", () => {
    // log selected category for now
    console.log(`Selected category: ${category.name}`);
  });

  return card;
}