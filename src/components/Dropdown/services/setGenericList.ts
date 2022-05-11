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

  let property: string;

  return list.map(item => {
    if(!property){
      for(let prop of Object.keys(item)){
        if(typeof item[prop] === "object" && Array.isArray(item[prop]) === false){
          property = prop
        }
      }
    }

    return ({
      key: item[property].name,
      value: item[property].url.match(/\/\w+\/\w+\/$/i)
    })
  })
}

export { setGenericList }