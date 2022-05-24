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
    notification: {
      content: "",
      value: false
    },
    pokemonsIDs: []
  })
  
  const addPokemons = (payload: IPokemon[], api: string, newResults: IResult[]) => {
    payload = payload.filter(item => !state.pokemonsIDs.includes(item.id))

    setState({
      ...state,
      offset: state.offset + LIMIT,
      results: [...state.results, ...newResults],
      pokemons: [...state.pokemons, ...payload],
      api,
      pokemonsIDs: [...state.pokemonsIDs, ...payload.map(item => item.id)]
    })
  }

  const addSinglePokemon = (payload: IPokemon) => {
    setState({
      ...state,
      pokemons: [...state.pokemons, payload],
      pokemonsIDs: [...state.pokemonsIDs, payload.id]
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
    const newPokemonsArr = [...state.pokemons]
    if(!validation){
      payload = {
        ...payload,
        isInPokedex: true
      }
      const index = state.pokemons.findIndex(item => item.id === payload.id)
      newPokemonsArr.splice(index, 1, payload)
    }

    /** Here the pokedux array has been added to the localStorage */
    const localStoragePokedux = JSON.parse( window.localStorage.getItem("pokedux") as string )
    let newLocalStoragePokedux
    if(localStoragePokedux){
      if(validation) newLocalStoragePokedux = localStoragePokedux
      if(!validation) newLocalStoragePokedux = [...localStoragePokedux, payload]
    }else{
      newLocalStoragePokedux = [payload]
    }
    window.localStorage.setItem("pokedux", JSON.stringify(newLocalStoragePokedux))

    setState({
      ...state,
      pokedux: newLocalStoragePokedux,
      pokemons: newPokemonsArr,
      notification: {
        content: "The pokemon was added successfully",
        value: true
      }
    })

    updateNotification()
  }

  const removeFromPokedux = (payload: number) => {
    const index = state.pokemons.findIndex(pokemon => pokemon.id === payload)
    const newPokemon: IPokemon = {
      ...state.pokemons[index],
      isInPokedex: false
    }
    const newPokemonsArr = [...state.pokemons]
    newPokemonsArr.splice(index, 1, newPokemon)

    /** Here the pokedux array has been modified into the localStorage */
    const localStoragePokedux = JSON.parse( window.localStorage.getItem("pokedux") as string ) as IPokemon[]
    const newLocalStoragePokedux = localStoragePokedux.filter(item => item.id !== payload)
    window.localStorage.setItem("pokedux", JSON.stringify(newLocalStoragePokedux))

    setState({
      ...state,
      pokedux: newLocalStoragePokedux,
      pokemons: newPokemonsArr,
      notification: {
        content: "The pokemon was removed successfully",
        value: true
      }
    })

    updateNotification()
  }

  const updateNotification = () => {
    setTimeout(() => {
      setState({
        ...state,
        notification: {
          content: "",
          value: false
        }
      })
    }, 7000)
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
    removeFromPokedux,
    addSinglePokemon
  }
}