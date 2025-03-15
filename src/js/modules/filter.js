export function filterMyths(myths, selectedtags) {
  // Filter myths to include only those that match all selected tags
  return myths.filter((myth) =>
    selectedtags.every((tag) => myth.tags.includes(tag))
  );
}
