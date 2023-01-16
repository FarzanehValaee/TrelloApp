import React, { Component } from 'react';
import TrelloList from './TrelloList';
import {connect} from 'react-redux';
import TrelloActionButton from './TrelloActionButton';

class App extends Component {
  render() {
    const {lists} = this.props;
    return (
        <div className="App">
        <h2>Trello</h2>
        <div 
        className='cardLists'
        style={styles.cardLists}
        >
          {
            lists.map(list => <TrelloList 
              title={list.title} 
              cards={list.cards} 
              />)
          }
          <TrelloActionButton 
          list 
          />
        </div>
      </div>
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
