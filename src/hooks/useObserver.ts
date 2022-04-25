import { IInitialState } from "../types"
import { fetchItems } from "../utils/fetchItems"

const action = (initialState: IInitialState) => () => {
  fetchItems(initialState)
}

const config = {
  threshold: 1
}

export const useObserver = (initialState: IInitialState) => {
  const observer = new IntersectionObserver(action(initialState), config)
  return observer
}