import { useState } from "react"
import { LIMIT } from "../globals"
import { IPokemon, IState } from "../types"

export const useInitialState = () => {
  const [state, setState] = useState<IState>({
    pokemons: [],
    offset: 0,
    loading: true,
    error: false,
  })
  
  const addPokemons = (payload: IPokemon[]) => setState({
    ...state,
    offset: state.offset + LIMIT,
    pokemons: [...state.pokemons, ...payload],
  })

  return {
    state,
    addPokemons
  }
}