export function suggest(txt: string, suggestions: string[] = []): string[] {
  return suggestions
    .filter(s => s.toLowerCase().includes(txt.toLowerCase()))
    .slice(0, 9);
}

export function highlited(
  text: string,
  typed: string,
  suggestionWrapPattern?: string
) {
  const wrap = suggestionWrapPattern || "<b><u>$1</u></b>";
  return text.replace(new RegExp(`(${typed})`, "gi"), wrap);
}

export function without<T>(arr: T[], el: T) {
  return arr.filter(e => e !== el);
}