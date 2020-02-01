export const sanitiseQuery = query =>
  String(query)
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/, "")
    .split(/\s+/)
    .slice(0, 10)
    .map(word => encodeURIComponent(word))
    .join("+");
