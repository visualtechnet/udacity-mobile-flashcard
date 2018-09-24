import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { connect } from 'react-redux'

import { CardView } from './style'
import { bindActionCreators } from 'redux';
import { getDeckWithQuestions } from '../../state/deck/actions'


class CardScreen extends Component {  
  componentDidMount() {
    const { navigation, getDeckWithQuestions, decks, quizzes } = this.props

    getDeckWithQuestions(navigation.getParam("key"), decks, quizzes)
  }

  displayDeckWithQuestions = () => {
    const { deckWithQuestions } = this.props

    if(deckWithQuestions) {
      return (
        <CardView>
          <Text>{ deckWithQuestions.title }</Text>
        </CardView>
      )
    }
  }

  render() {
    return this.displayDeckWithQuestions()
  }
}

CardScreen.propTypes = {
  navigation: PropTypes.any,
  getDeckWithQuestions: PropTypes.any,
  decks: PropTypes.array,
  quizzes: PropTypes.array,
  deckWithQuestions: PropTypes.any
}

const mapStateToProps = state => ({
  decks: state.deck.decks,
  quizzes: state.quiz.quizzes,
  deckWithQuestions: state.deck.deckWithQuestions
})

const mapDispatchToActions = dispatch => bindActionCreators({
  getDeckWithQuestions
}, dispatch)

CardScreen = connect(mapStateToProps, mapDispatchToActions)(CardScreen)

export { CardScreen }