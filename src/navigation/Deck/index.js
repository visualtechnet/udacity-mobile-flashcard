import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Foundation from '@expo/vector-icons/Foundation';

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Deck',    
    drawerLabel: 'Deck',
    drawerIcon: ({ tintColor }) => {
      <Foundation name="list" color={tintColor} />
    }
  }

  loadQuizzesForDeck = id => {
    const { decks, quizzes } = this.props

    const deck = decks.find(deck => decks.id === id)
    const quizzes = quizzes

    
  }

  componentDidMount() {
    const { navigation } = this.props

    loadQuizzesByDeck(navigation.getParam("key"))
  }

  render() {
    return (
      <View>
        <Text>
          Hello DeckScreen
        </Text>
      </View>
    )

  }
}

const mapStateToProps = state => ({
  decks: state.deck.decks,
  quizzes: state.quiz.quizzes
})

DeckScreen = connect(mapStateToProps)(DeckScreen)

export { DeckScreen }