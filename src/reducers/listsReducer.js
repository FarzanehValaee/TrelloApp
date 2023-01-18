import { CONSTANTS } from "../actions";

let listID=3;
let cardID=4;

const initialState =[
          {
                    title: 'To Do',
                    id:`list-${0}`,
                    cards:[
                              {
                                        id:`card-${0}`,
                                        text:"Question Pool"

                              },
                              {
                                        id:`card-${1}`,
                                        text:"Question Pool2"

                              }
                    ]
          },
          {
                    title: 'Doing',
                    id:`list-${1}`,
                    cards:[
                              {
                                        id:`card-${2}`,
                                        text:"Create Team Sheet"

                              }
                    ]
          },
          {
                    title: 'Done',
                    id:`list-${2}`,
                    cards:[
                              {
                                        id:`card-${3}`,
                                        text:"Salary Sheet"

                              }
                    ]
          }
]

export default function listsReducer(state= initialState,action) {

          switch(action.type) {
                    case CONSTANTS.ADDList:
                              const newList ={
                                        title:action.payload,
                                        cards:[],
                                        id: `list-${listID}`
                              }
                              listID++ 
                              return [...state,newList]

                    case CONSTANTS.ADDCARD:
                              const newCard ={
                                        text:action.payload.text,
                                        id: `card-${cardID}`
                              }
                              cardID++ 
                              const newState=state.map(list =>{
                                        if(list.id === action.payload.listID){
                                                  // console.log(newCard)
                                                  return{
                                                            ...list,
                                                            cards:[...list.cards,newCard]
                                                  }
                                        }else{
                                                  return list
                                        }

                              })
                              return newState





                    default:
                              return state;
          }

}
