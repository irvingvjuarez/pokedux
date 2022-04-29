import { IGenericItem } from "../../../types"

const setGenericList = (list: any[], isStat: boolean = false): IGenericItem[] => {

  if(isStat) return list.map(item => {
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

  return list.map(item => ({
    key: item.move.name,
    value: item.move.url.match(/\/\w+\/\w+\/$/i)
  }))
}

export { setGenericList }