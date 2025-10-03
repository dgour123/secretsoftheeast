// src/utils/slugify.js
export function slugify(text = "") {
  return text
    .toString()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")   // diacritics remove
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")       // non-alphanumeric -> hyphen
    .replace(/(^-|-$)/g, "");          // leading/trailing hyphen remove
}

/**
 * Ensure unique slugs (WITHOUT id prefix).
 * Returns new array with `slug` field added.
 */
export function addSlugsToProducts(products) {
  const seen = new Set();
  return products.map((p) => {
    const base = slugify(p.name || String(p.id));
    let unique = base || String(p.id);
    let i = 1;
    while (seen.has(unique)) {
      unique = `${base}-${i++}`;
    }
    seen.add(unique);
    return { ...p, slug: unique };
  });
}
