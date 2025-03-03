export function renderHero() {
  const hero = document.createElement('section');
  hero.classList.add('hero');

  hero.innerHTML = `
    <h1>Mythology Database</h1>
    <p>Explore myths, deities, and creatures from around the world.</p>
  `;

  return hero;
}