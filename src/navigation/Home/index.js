import React, { Component } from 'react'
import { View, Text, FlatList, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DeckItem, DeckTitle, DeckCount } from './style'

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',    
    drawerIcon: ({ tintColor }) => {
      <FontAwesome name="home" color={tintColor} />
    }
  })

  viewDeck = item => {
    const { navigation } = this.props

    navigation.navigate('Deck', { key: item.id });
  }

  deckView = ({ item }) => {
    console.log('Deck You Item', item)
    return (
      <TouchableHighlight id={item.id} onPress={item => this.viewDeck(item)} tintColor="#fff">
        <DeckItem>
          <DeckTitle>{ item.title }</DeckTitle>
          <DeckCount>{ item.questions.length }</DeckCount>
        </DeckItem>
      </TouchableHighlight>
    )
  }

  render() {
    const { decks, quizzes } = this.props

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