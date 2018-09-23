import React, { Component } from 'react'
import { View, Text, FlatList, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { DeckItem, DeckTitle, DeckCount } from './style'
import { stackWithNav } from '../../components/header';

class HomeScreen extends Component {  
  viewDeck = item => {
    const { navigation } = this.props

    navigation.navigate('Deck', { id: item.id });
  }

  deckView = ({ item }) => {    
    return (
      <TouchableHighlight id={item.id} onPress={item => this.viewDeck(item)} tintColor="#fff">
        <DeckItem>
          <DeckTitle>{ item.title }</DeckTitle>
          <DeckCount>{ item.quizzes.length }</DeckCount>
        </DeckItem>
      </TouchableHighlight>
    )
  }

  render() {
    const { decks, quizzes, navigation } = this.props

    // console.log('Stack With Nav Options', stackWithNav(navigation))    
    // console.log('New Object Assign', Object.assign({}, stackWithNav(navigation), { headerTitle: 'Home' }))

    return (
      <View>
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