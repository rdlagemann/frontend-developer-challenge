export default function brl(v) {
  return `R$ ${currency(v, 2)}`
}

function currency(v, decimals) {
  const value = v.toString().replace(',', '.')
  return Number(value)
    .toFixed(decimals)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+\b)/g, '$1.')
}
