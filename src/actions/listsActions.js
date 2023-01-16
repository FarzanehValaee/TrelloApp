import { CONSTANTS } from "../actions"
export const addList=(title)=>{
          return {
                    type: CONSTANTS.ADDList,
                    payload:title

          }
}