const isALiteralObj = (target: unknown) => typeof target === "object" && !Array.isArray(target)
interface INewObj {
  [key: string]: string | object
}
type objType = string | INewObj | object

export const cleanObj = (item: objType): objType => {
  const validation = isALiteralObj(item)

  if(validation){
    let newobj: INewObj = {}

    for(let prop of Object.keys(item as object)){
      const prospect = cleanObj( item[prop as keyof objType] )
      if( isALiteralObj(prospect) ){
        newobj = {
          ...newobj,
          ...prospect as object
        }
      }else{
        newobj[prop] = prospect
      }
    }

    return newobj
  }

  return item
}