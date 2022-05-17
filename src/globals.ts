import { IPageSection } from "./types";

export const LIMIT = 12;
export const API =  "https://pokeapi.co/api/v2/pokemon"
export const ARR = new Array(LIMIT).fill(0).map(item => Math.random().toString(16))
export const ALL_SECTIONS: IPageSection[] = [
  {
    path: "/",
    title: "Pokemons",
    detail: "pokemon/"
  }
]