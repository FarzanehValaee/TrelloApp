import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton'

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
          <TrelloActionButton/>
    </div>
  )
}
const styles={
          container: {
                    backgroundColor:"#dfe3e6",
                    borderRadius:3,
                    width:300,
                    padding:5,
                    margin:2,
                    marginTop:0,
                    height:'100%',
                    
          },
          header:{
            margin:5,
            paddingLeft:8,
          },
}
