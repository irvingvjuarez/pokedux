export interface IPokemon {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  }
}

export interface IState {
  pokemons: IPokemon[];
  offset: number;
  loading: boolean;
  error: boolean;
}

export interface IInitialState {
  state: IState,
  increaseOffset(): void,
  addPokemons(pokemons: IPokemon[]): void
}