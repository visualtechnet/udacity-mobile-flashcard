import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, TouchableOpacity } from 'react-native'
import { DeckItem, DeckTitle, DeckCount } from './style'
import { Container } from '../../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class HomeScreen extends Component {  
  constructor(props) {
    super(props)

    this.state = {
      decks: []
    }
  }

  viewDeck = deck => {
    const { navigation } = this.props
            
    navigation.navigate('Deck', { "id": deck.id });
  }

  deckView = ({ item }) => {    
    return (
      <TouchableOpacity key={item.id} onPress={() => this.viewDeck(item)} tintColor="#fff">
        <DeckItem>
          <DeckTitle>{ item.title }</DeckTitle>
          <DeckCount>{ item.quizzes && item.quizzes.length }</DeckCount>
        </DeckItem>
      </TouchableOpacity>
    )
  }

  render() {    
    const { decks } = this.props
            
    if(decks) {      
      return (
        <Container>
          {          
            <FlatList data={decks} renderItem={this.deckView} keyExtractor={ item => item.id} />            
          }
        </Container>
      )
    }
  }
}

HomeScreen.propTypes = {    
  navigation: PropTypes.any,
  decks: PropTypes.any
}

const mapStateToProps  = state => ({
  decks: state.deck.decks
})

const mapDispatchToProps = dispatch => bindActionCreators({
  
}, dispatch)

HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

export { HomeScreen }