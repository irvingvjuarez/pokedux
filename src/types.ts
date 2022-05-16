export type IList = IStat[] | IGenericItem[] | IMoveRef[] | IAbilityRef[] | IPokemonRef[] | IListItem[]

export interface IAbilityRef {
  ability: {
    name: string;
    url: string;
  }
}

export interface IEffect {
  effect: string;
  short_effect: string;
  language: {
    name: string
  }
}

export interface IPokemonRef {
  pokemon: {
    name: string;
    url: string;
  }
}

export interface IAbility {
  effect_entries: IEffect[];
  pokemon: IPokemonRef[];
  id: number;
  name: string;
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

export interface IMoveRef{
  move: {
    name: string,
    url: string
  }
}

export interface IListItem {
  name: string;
  url: string;
}

export interface IMove {
  accuracy: number;
  name: string;
  id: number;
  power: number;
  pp: number;
  priority: number;
  learned_by_pokemon: IListItem[] | IPokemonRef[];
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
  moves: IMoveRef[],
  abilities: IAbilityRef[],
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
  abilities: IAbility[];
  moves: IMove[];
}

export interface IInitialState {
  state: IState,
  addPokemons(pokemons: IPokemon[], api: string, newResults: IResult[]): void,
  updateSearches(payload: string): void,
  updateResults(payload: IResult[]): void,
  addAbility(payload: IAbility): void,
  addMove(payload: IMove): void
}