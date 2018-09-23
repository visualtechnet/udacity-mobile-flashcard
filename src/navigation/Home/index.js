import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { DeckItem, DeckTitle, DeckCount } from './style'

class HomeScreen extends Component {  
  viewDeck = item => {
    const { navigation } = this.props

    navigation.navigate('Deck', { id: item.id });
  }

  deckView = ({ item }) => {    
    return (
      <TouchableOpacity id={item.id} onPress={item => this.viewDeck(item)} tintColor="#fff">
        <DeckItem>
          <DeckTitle>{ item.title }</DeckTitle>
          <DeckCount>{ item.quizzes.length }</DeckCount>
        </DeckItem>
      </TouchableOpacity>
    )
  }

  render() {
    const { decks, quizzes, navigation } = this.props

    return (
      <View>
        <StatusBar barStyle="light-content" />
        {
          decks && decks.length > 0 && (
            <FlatList data={decks} 
            renderItem={this.deckView} 
            keyExtractor={(item, index) => item.id} />
          )
        }
      </View>
    )

  }
}

const mapStateToProps = state => ({
  decks: state.deck.decks,
  quizzes: state.quiz.quizzes
})

HomeScreen = connect(mapStateToProps)(HomeScreen)

export { HomeScreen }