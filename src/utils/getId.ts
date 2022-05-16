export const getId = (url: string) => {
  const matches = url.match(/\d+/)
  return matches ? matches[0] : ""
}