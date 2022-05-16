import { API } from "../../globals"
import { IAbility } from "../../types"

export const fetchAbility = (abilityID: string, callback: (payload: IAbility) => void) => {
  const currentAPI = API.replace("pokemon", "ability/") + abilityID
  fetch(currentAPI)
    .then(res => res.json())
    .then(data => callback(data))
}