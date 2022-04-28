interface IPokemonTypes {
  type: {
    name: string
  }
}

export interface IPokemon {
  name: string;
  id: number;
  sprites: {
    front_default: string;
    back_default: string;
  },
  types: IPokemonTypes[],
  base_experience: number,
  height: number,
  weight: number
}

export interface IState {
  pokemons: IPokemon[];
  offset: number;
  loading: boolean;
  error: boolean;
  api: string;
}

export interface IInitialState {
  state: IState,
  addPokemons(pokemons: IPokemon[], api: string): void
}