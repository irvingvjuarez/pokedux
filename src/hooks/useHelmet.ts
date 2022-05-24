const useHelmet = (title: string, description: string): void => {
  document.title = title
  const titleTag = document.querySelector("meta[property='og:title']") as HTMLMetaElement
  titleTag.content = title
  const descriptionTag = document.querySelector("meta[property='og:description']") as HTMLMetaElement
  descriptionTag.content = description
}

export { useHelmet }