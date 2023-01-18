import React, { Component } from 'react';
import TrelloList from './TrelloList';
import {connect} from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends Component {
  onDragEnd =() => {

  }
  render() {
    const {lists} = this.props;
    return (
        <DragDropContext
                onDragEnd={
                  this.onDragEnd
                }
          
        >
          <div className="App">
              <h2>Trello</h2>
              <div 
              className='cardLists'
              style={styles.cardLists}
              >
                {
                  lists.map(list => 
                  <TrelloList 
                    title={list.title} 
                    cards={list.cards} 
                    id={list.id}
                    /> 
                    )
                }
                <TrelloActionButton 
                list 
                />
              </div>
        </div>
      </DragDropContext>
    )
  }
}


const mapStateToProps = state => ({
    lists: state.lists
})

const styles={
  cardLists:{
    display: 'flex',
    flexDirection: 'row',
  }
}
export default connect(mapStateToProps)(App);
