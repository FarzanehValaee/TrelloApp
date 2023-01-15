import React from 'react';
import TrelloCard from './TrelloCard';

export default function TrelloList({title}) {
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
                    <TrelloCard/>
          </container>
    </div>
  )
}
const styles={
          container: {
                    backgroundColor:"#ccc",
                    borderRadius:3,
                    width:300,
                    padding:5,
          },
          header:{
            paddingLeft:17,
          }
}
