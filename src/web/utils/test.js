export function uniqueKey() {
  return String(Math.random()).slice(2) + '-' + Date.now()
}
