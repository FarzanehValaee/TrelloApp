import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable} from 'react-beautiful-dnd';

export default function TrelloList({title,id,cards}) {
  return (
      <Droppable
        droppableId={String(id)}
      >
        {
          provided =>(
              <div
              {...provided.droppableProps} 
              ref={provided.innerRef}
              className='TrelloList'
              style={styles.container}
              key={id}
            >
                <h4
                        style={styles.header}
                >
                          {title}
                </h4>
                <div>
                  {
                    cards.map((card,index) =><TrelloCard 
                                              card={card} 
                                              index={index} 
                                              id={card.id}
                                            />)
                  }
                  
                </div>
                <TrelloActionButton listID={id}/>
                {provided.placeholder}
            </div>

         )
        }

      </Droppable>
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
