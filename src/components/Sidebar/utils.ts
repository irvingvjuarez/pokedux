import { IPageSection } from "../../types";

export const doesMatch = (route: string, section: IPageSection) => {
  const { path, detail } = section
  if(route === path || route.includes(detail)) return true
  return false
}