export function getParsedPrice(price?: string) {
  if (!price) return NaN

  return parseFloat(price).toFixed(2)
}
