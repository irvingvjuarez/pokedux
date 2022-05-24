import { ISprites } from "../../types";

export const getNewAlbum = (oldAlbum: ISprites) => {
  /** Here any is being used, but it's a bad practice */
  const standard: any = {}

  for(let key of Object.keys(oldAlbum)){
    const value = oldAlbum[key as keyof ISprites]

    // If property is a string, include it into standard object
    if(typeof value === "string") standard[key] = value
  }

  return {
    standard,
    ...oldAlbum.other
  }
}