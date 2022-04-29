// {base_stat: pokemon.base_experience, stat: { name: "Experience" }}

import { IGenericItem } from "../../../types"

const setGenericList = (list: any[]): IGenericItem[] => {
  return list.map(item => {
    const genericItem = {
      key: "",
      value: 0
    }

    for(let key of Object.keys(item)){
      if(!genericItem.key) genericItem.key = item[key]?.name
      if(item[key] > 1) genericItem.value = item[key]
    }

    return genericItem
  })
}

export { setGenericList }