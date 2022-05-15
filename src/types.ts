export type IList = IStat[] | IGenericItem[] | IMove[] | IAbility[]

export interface IAbility {
  ability: {
    name: string;
    url: string;
  }
}

export interface IResult {
  name: string;
  url: string;
}

export interface IPhoto {
  title: string;
  url: string;
}

export interface IPokemonTypes {
  type: {
    name: string
  }
}

export interface IPageSection {
  path: string;
  title: string;
  detail: string;
}

export interface IGenericItem {
  key: string,
  value: number | string[]
}

export interface IMove{
  move: {
    name: string,
    url: string
  }
}

export interface IStat {
  base_stat: number,
  stat: {
    name: string
  }
}

export interface ISprites {
  front_default: string;
  back_default: string;
  other: {
    dream_world: {
      front_default: string
    }
  }
}

export interface IPokemon {
  name: string;
  id: number;
  sprites: ISprites,
  types: IPokemonTypes[],
  base_experience: number,
  height: number,
  weight: number,
  stats: IStat[],
  moves: IMove[],
  abilities: IAbility[],
}

export interface IState {
  pokemons: IPokemon[];
  results: IResult[];
  searchResults: IResult[];
  offset: number;
  loading: boolean;
  error: boolean;
  api: string;
  count: number;
}

export interface IInitialState {
  state: IState,
  addPokemons(pokemons: IPokemon[], api: string, newResults: IResult[]): void,
  updateSearches(payload: string): void,
  updateResults(payload: IResult[]): void
}