import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import Foundation from '@expo/vector-icons/Foundation';
import { bindActionCreators } from 'redux';
import { getDeckWithQuestions } from '../../state/deck/actions'

class DeckScreen extends Component {    
  componentDidMount() {
    const { navigation, getDeckWithQuestions, decks, quizzes } = this.props
    console.log('adsfafasdfasfdasdfsadf')
    console.log(' ======== Test =========== ', navigation.getParam('id', '0'), decks, quizzes)

    getDeckWithQuestions(navigation.getParam("key"), decks, quizzes)
  }

  renderDeckWithQuestions = () => {
    const { navigation, deckWithQuestions } = this.props    
    const quizzesCount = deckWithQuestions.quizzes ? deckWithQuestions.quizzes.length : 0
        
    return (
      <View>
        <Text>{ deckWithQuestions.id }</Text>
        <Text>{ deckWithQuestions.title }</Text>
        <Text>{`No of cards: ${quizzesCount}`}</Text>
        <Button title="Add New Question" onPress={() => navigation.navigate('NewQuiz', { key: deckWithQuestions.id })}></Button>
        <Button title="Start Quiz" onPress={() => navigation.navigate('Card', { key: deckWithQuestions.id })}></Button>
      </View>
    )
  }

  render() {
    return this.renderDeckWithQuestions()
  }
}

const mapStateToProps = state => ({
  decks: state.deck.decks,
  quizzes: state.quiz.quizzes,
  deckWithQuestions: state.deck.deckWithQuestions
})

const mapDispatchToActions = dispatch => bindActionCreators({
  getDeckWithQuestions 
}, dispatch)

DeckScreen = connect(mapStateToProps, mapDispatchToActions)(DeckScreen)

export { DeckScreen }