import { IListItem } from "../../types"

export const arrangeListItems = (arr: IListItem[], value: string) => {
  return arr.map(item => ({
    [value]: {
      ...item
    }
  }))
}