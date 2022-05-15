import { IPhoto } from "../types"

export const getImagesArr = (photoObj: object) => {
  const newObj: IPhoto[] = []

  for(let photo of Object.keys(photoObj)){
    if(typeof photoObj[photo as keyof object] === "string"){
      newObj.push({
        title: photo,
        url: photoObj[photo as keyof object]
      })
    }
  }

  return newObj
}