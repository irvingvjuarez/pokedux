import { useState } from "react"
import { API, LIMIT } from "../globals"
import { IAbility, IPokemon, IResult, IState } from "../types"

export const useInitialState = () => {
  const [state, setState] = useState<IState>({
    pokemons: [],
    results: [],
    searchResults: [],
    offset: 0,
    loading: true,
    error: false,
    api: API + "?limit=" + LIMIT,
    count: 100000,
    abilities: [],
    moves: []
  })
  
  const addPokemons = (payload: IPokemon[], api: string, newResults: IResult[], newCount: number | undefined) => {
    setState({
      ...state,
      offset: state.offset + LIMIT,
      results: [...state.results, ...newResults],
      pokemons: [...state.pokemons, ...payload],
      api,
      count: newCount ? newCount : state.count
    })
  }

  const updateSearches = (payload: string) => {
    setState({
      ...state,
      searchResults: !payload ? [] : state.results.filter(result => result.name.includes(payload)).filter((item, index) => index <= 15)
    })
  }

  const updateResults = (payload: IResult[]) => {
    setState({
      ...state,
      results: [...state.results, ...payload]
    })
  }

  const addAbility = (payload: IAbility) => {
    setState({
      ...state,
      abilities: [...state.abilities, payload]
    })
  }

  return {
    state,
    addPokemons,
    updateSearches,
    updateResults,
    addAbility
  }
}