/* mythCards.js */
export function renderMythCards(filteredMyths) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');

  filteredMyths.forEach((myth) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <div class="name">${myth.title}</div>
      <div class="image-container">
        <img src="${myth.image}" alt="${myth.title}" />
      </div>
      <div class="tags">
        ${myth.tags.map((tag) => `<span>${tag}</span>`).join('')}
      </div>
      <div class="description">
        ${myth.description}
      </div>
      <div class="quote">
        ${myth.quote || '"Even the greatest myths echo through eternity."'}
      </div>
    `;

    cardContainer.appendChild(card);
  });

  return cardContainer;
}
