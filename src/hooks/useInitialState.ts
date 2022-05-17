import { useState } from "react"
import { API, LIMIT } from "../globals"
import { IAbility, IMove, IPokemon, IResult, IState } from "../types"

export const useInitialState = () => {
  const [state, setState] = useState<IState>({
    pokemons: [],
    pokedux: [],
    results: [],
    searchResults: [],
    offset: 0,
    loading: true,
    error: false,
    api: API + "?limit=" + LIMIT,
    count: 100000,
    abilities: [],
    moves: [],
    isModalOpen: {
      content: null,
      value: false
    },
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

  const addMove = (payload: IMove) => {
    setState({
      ...state,
      moves: [...state.moves, payload]
    })
  }

  const toggleModal = (payload?: unknown) => {
    setState({
      ...state,
      isModalOpen: {
        value: !state.isModalOpen.value,
        content: payload ?? null
      }
    })
  }

  const addToPokedux = (payload: IPokemon) => {
    const validation = state.pokedux.find(item => item.id === payload.id)
    setState({
      ...state,
      pokedux: validation ? state.pokedux : [...state.pokedux, payload]
    })
  }

  const removeFromPokedux = (payload: number) => {
    setState({
      ...state,
      pokedux: state.pokedux.filter(item => item.id !== payload)
    })
  }

  return {
    state,
    addPokemons,
    updateSearches,
    updateResults,
    addAbility,
    addMove,
    toggleModal,
    addToPokedux,
    removeFromPokedux
  }
}