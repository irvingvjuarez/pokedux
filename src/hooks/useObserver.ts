import { handleFetching } from "../pages/Home/utils"
import { IInitialState } from "../types"
import { fetchItems } from "../utils/fetchItems"

const action = (
  entry: IntersectionObserverEntry,
  initialState: IInitialState,
  observer: IntersectionObserver
) => {
  fetchItems(initialState)
  observer.unobserve(entry.target)
}

const config = {
  threshold: 1
}

export const useObserver = (initialState: IInitialState) => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => action(entry, initialState, observer))
  }, config)
  return observer
}