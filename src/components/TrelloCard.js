import * as React from 'react';
import Card from '@mui/material/Card';
import { Draggable } from 'react-beautiful-dnd';

export default function TrelloCard({card,index}) {
      
   {/* {console.log(card)} */}
  return (
        <Draggable
          draggableId={String(card.id)}
          index={index}
        >
          {
            provided=>(
              <div 
              ref={provided.innerRef} 
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              key={card.id}
              >
                <Card 
                sx={{px:2,py:1,my:1}}
                key={card.id}
                >
                  {card.text}
                        
                </Card>

              </div>


            )


          }
        </Draggable>
      )
}
