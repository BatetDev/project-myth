/* tags.js */
import tagsData from "../../data/tags.json";

export function renderTags() {
  const tags = tagsData;

  // Create a container for the tags
  const container = document.createElement("div");
  container.className = "tags-container";

  // Back to Home button
  const backButton = document.createElement("button");
  backButton.id = "back-btn";
  backButton.textContent = "Back to Home";
  backButton.style.marginBottom = "20px";
  container.appendChild(backButton);

  // Add a "Clear All Tags" button
  const clearButton = document.createElement("button");
  clearButton.id = "clear-tags-btn";
  clearButton.textContent = "Clear All Tags";
  clearButton.style.marginBottom = "20px";
  container.appendChild(clearButton);

  // Render each group of tags
  for (const [group, tagList] of Object.entries(tags)) {
    const groupDiv = document.createElement("div");
    groupDiv.className = "tag-group";

    // Add a heading for the group
    const heading = document.createElement("h4");
    heading.textContent = group;
    groupDiv.appendChild(heading);

    // Add buttons for each tag
    const tagWrapper = document.createElement("div");
    tagWrapper.className = "tag-wrapper";

    tagList.forEach((tag) => {
      const tagButton = document.createElement("button");
      tagButton.textContent = tag;
      tagButton.className = "tag-button";
      tagWrapper.appendChild(tagButton);
    });

    groupDiv.appendChild(tagWrapper);
    container.appendChild(groupDiv);
  }

  return container;
}
