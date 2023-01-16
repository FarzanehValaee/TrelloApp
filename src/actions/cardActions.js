import { CONSTANTS } from "../actions"
export const addCard=(listID,text)=>{
          return {
                    type: CONSTANTS.ADDCARD,
                    payload:{listID,text}

          }
}