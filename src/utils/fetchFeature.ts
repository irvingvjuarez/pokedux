import { API } from "../globals"
import { IAbility } from "../types"

export const fetchFeature = (
  featureID: string,
  featureName: string,
  callback: (payload: IAbility) => void
) => {
  const currentAPI = API.replace("pokemon", `${featureName}/`) + featureID
  fetch(currentAPI)
    .then(res => res.json())
    .then(data => callback(data))
}