export const getId = (url: string) => {
  console.log("url", url)
  const matches = url.match(/\d+/)
  return matches ? matches[0] : ""
}