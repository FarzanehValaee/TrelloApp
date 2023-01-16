import React from 'react';
import TrelloCard from './TrelloCard';

export default function TrelloList({title,cards}) {
  return (
    <div 
        className='TrelloList'
        style={styles.container}
     >
          <h4
                  style={styles.header}
          >
                    {title}
          </h4>
          <container>
            {
              cards.map(card =><TrelloCard card={card}/>)
            }
          </container>
    </div>
  )
}
const styles={
          container: {
                    backgroundColor:"#dfe3e6",
                    borderRadius:3,
                    width:300,
                    padding:5,
                    margin:2
          },
          header:{
            paddingLeft:16,
          },
}
