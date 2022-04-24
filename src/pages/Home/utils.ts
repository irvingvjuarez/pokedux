import { IInitialState } from "../../types"
import { fetchItems } from "../../utils/fetchItems"

export const handleFetching = (initialState: IInitialState) => () => {
  fetchItems(initialState)
}