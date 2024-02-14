// Turn the first letter into an uppercase
export function capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

// convert a slug into a title
export function slugToTitle(slug: string): string {
  const words = slug.split("-");
  const capitalizedWords = words.map(capitalizeFirstLetter);
  return capitalizedWords.join(" ");
}