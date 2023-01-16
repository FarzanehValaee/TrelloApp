import * as React from 'react';
import Card from '@mui/material/Card';

export default function TrelloCard({card}) {
      
   {/* {console.log(card)} */}
  return (
          <Card 
          sx={{px:2,py:1,my:1}}
          key={card.id}
          >
            {card.text}
                    
          </Card>
      )
}
