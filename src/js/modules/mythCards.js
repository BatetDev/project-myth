import myths from '../../data/myths.json';

export function renderMythCards() {
  const mythContainer = document.createElement('div');
  mythContainer.id = 'myth-container';

  myths.forEach(myth => {
    const card = document.createElement('div');
    card.classList.add('myth-card');

    card.innerHTML = `
      <img src="${myth.image}" alt="${myth.title}">
      <h2>${myth.title}</h2>
      <p>${myth.description}</p>
      <div class="tags">
        ${myth.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    `;

    mythContainer.appendChild(card);
  });

  return mythContainer;
}