import { useState } from "react"
import { LIMIT } from "../globals"
import { IState } from "../types"

export const useInitialState = () => {
  const [state, setState] = useState<IState>({
    pokemons: [],
    offset: 0,
    loading: true,
    error: false,
  })

  const increaseOffset = () => setState({
    ...state,
    offset: state.offset + LIMIT
  })

  return {
    state,
    increaseOffset
  }
}