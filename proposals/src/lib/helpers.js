export function formatPrice(price) {
  const formatted = Intl.NumberFormat('en-US', {
    style: 'decimal',
    currency: 'USD'
  }).format

  return `$${formatted(price)} mxn`
}