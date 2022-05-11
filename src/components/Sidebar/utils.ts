import { IPageSection } from "../../types";

const createRegExp = (pattern: string) => {
  return new RegExp(pattern, 'i');
}

export const doesMatch = (route: string, section: IPageSection) => {
  const { path, detail } = section
  if(route === path || route.includes(detail)) return true
  return false
}

export const getMatch = (route: string, section: IPageSection) => {
  const { detail } = section

  const regExpression = createRegExp(`${detail.replace("/", "\/")}[A-z]+`)
  const matches = route.match(regExpression)
  
  if(matches){
    const match = matches[0].split("/")
    return match[1]
  }
  return ""
}