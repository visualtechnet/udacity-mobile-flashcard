import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { DeckItem, DeckTitle, DeckCount } from './style'
import { Container } from '../../components'

class HomeScreen extends Component {  
  viewDeck = deck => {
    const { navigation } = this.props
            
    navigation.navigate('Deck', { "id": deck.id });
  }

  deckView = ({ item }) => {    
    return (
      <TouchableOpacity id={item.id} onPress={() => this.viewDeck(item)} tintColor="#fff">
        <DeckItem>
          <DeckTitle>{ item.title }</DeckTitle>
          <DeckCount>{ item.quizzes && item.quizzes.length }</DeckCount>
        </DeckItem>
      </TouchableOpacity>
    )
  }

  render() {
    const { decks } = this.props

    return (
      <Container>
        {
          decks && decks.length > 0 && (
            <FlatList data={decks} 
            renderItem={this.deckView} 
            keyExtractor={ item => item.id} />
          )
        }
      </Container>
    )

  }
}

HomeScreen.propTypes = {
  decks: PropTypes.array,
  quizzes: PropTypes.array,
  navigation: PropTypes.any,

}

const mapStateToProps = state => ({
  decks: state.deck.decks,
  quizzes: state.quiz.quizzes
})

HomeScreen = connect(mapStateToProps)(HomeScreen)

export { HomeScreen }