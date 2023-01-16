import { CONSTANTS } from "../actions";

let listID=3;
let cardID=2;

const initialState =[
          {
                    title: 'To Do',
                    id:0,
                    cards:[
                              {
                                        id:0,
                                        text:"Question Pool"

                              },
                              {
                                        id:1,
                                        text:"Question Pool2"

                              }
                    ]
          },
          {
                    title: 'Doing',
                    id:1,
                    cards:[
                              {
                                        id:0,
                                        text:"Create Team Sheet"

                              }
                    ]
          },
          {
                    title: 'Done',
                    id:2,
                    cards:[
                              {
                                        id:0,
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
                                        id: listID
                              }
                              listID++ 
                              return [...state,newList]

                    case CONSTANTS.ADDCARD:
                              const newCard ={
                                        text:action.payload.text,
                                        id: cardID
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
