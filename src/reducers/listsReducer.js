const initialState =[
          {
                    title: 'To Do',
                    id:0,
                    cards:[
                              {
                                        id:0,
                                        text:"Question Pool"

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
                    default:
                              return state;
          }

}
