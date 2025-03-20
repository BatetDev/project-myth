/* hero.js */
export function renderHero() {
  const hero = document.createElement("section");
  hero.classList.add("hero");

  hero.innerHTML = `
    <div class="hero-content">
      <h1>Myth Database</h1>
      <p>Dive into the stories, gods, and creatures from cultures around the world.</p>
      <button id="explore-btn">Explore Myths</button>
      <button id="blog-btn">Read Blog</button>
    </div>
  `;

  return hero;
}
