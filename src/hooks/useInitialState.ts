import { useState } from "react"
import { API, LIMIT } from "../globals"
import { IPokemon, IState } from "../types"

export const useInitialState = () => {
  const [state, setState] = useState<IState>({
    pokemons: [],
    offset: 0,
    loading: true,
    error: false,
    api: API + "?limit=" + LIMIT
  })
  
  const addPokemons = (payload: IPokemon[], api: string) => {
    setState({
      ...state,
      offset: state.offset + LIMIT,
      pokemons: [...state.pokemons, ...payload],
      api
    })
  }

  return {
    state,
    addPokemons
  }
}