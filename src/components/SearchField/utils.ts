import { IInitialState } from "../../types"
import { fetchResults } from "../../utils/fetchResults"

export class fetchAllResults {
  protected constructor(public initialState: IInitialState){
    fetchResults(this.initialState)
  }

  static instance: fetchAllResults

  static init(initialState: IInitialState){
    if(!fetchAllResults.instance){
      fetchAllResults.instance = new fetchAllResults(initialState)
    }
  }
}