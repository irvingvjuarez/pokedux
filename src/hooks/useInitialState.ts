import { useState } from "react"
import { API, LIMIT } from "../globals"
import { IPokemon, IResult, IState } from "../types"

export const useInitialState = () => {
  const [state, setState] = useState<IState>({
    pokemons: [],
    results: [],
    offset: 0,
    loading: true,
    error: false,
    api: API + "?limit=" + LIMIT
  })
  
  const addPokemons = (payload: IPokemon[], api: string, newResults: IResult[]) => {
    setState({
      ...state,
      offset: state.offset + LIMIT,
      results: [...state.results, ...newResults],
      pokemons: [...state.pokemons, ...payload],
      api,
    })
  }

  return {
    state,
    addPokemons,
  }
}