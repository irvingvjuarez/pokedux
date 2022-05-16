import { API } from "../globals"
import { IAbility, IMove } from "../types"

export const fetchFeature = (
  featureID: string,
  featureName: string,
  callback: (payload: any) => void
) => {
  const currentAPI = API.replace("pokemon", `${featureName}/`) + featureID
  fetch(currentAPI)
    .then(res => res.json())
    .then(data => callback(data))
}