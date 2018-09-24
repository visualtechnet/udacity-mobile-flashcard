import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getDeckWithQuestions } from '../../state/deck/actions'
import { ButtonMain } from '../../components'
import { DeckMain, DeckDetailView, DeckTitle, DeckSubTitle, ControlContainer } from './style'
import { Container } from '../../components'

class DeckScreen extends Component {    
  componentDidMount() {
    const { navigation, getDeckWithQuestions, decks, quizzes } = this.props    
    
    getDeckWithQuestions(navigation.getParam("id"), decks, quizzes)
  }

  renderDeckWithQuestions = () => {
    const { navigation, deckWithQuestions } = this.props    
    const quizzesCount = deckWithQuestions.quizzes ? deckWithQuestions.quizzes.length : 0
            
    return (
      <Container>
        <DeckDetailView>
          <DeckMain>
            <DeckTitle>{ deckWithQuestions.title }</DeckTitle>
            <DeckSubTitle>{`No of cards: ${quizzesCount}`}</DeckSubTitle>
          </DeckMain>
          <ControlContainer>
            <ButtonMain title="ADD CARD" onPress={() => navigation.navigate('NewQuiz', { key: deckWithQuestions.id })}></ButtonMain>
            <ButtonMain title="START QUIZ" onPress={() => navigation.navigate('Card', { key: deckWithQuestions.id })}></ButtonMain>
          </ControlContainer>
        </DeckDetailView>
      </Container>
    )
  }

  render() {
    return this.renderDeckWithQuestions()
  }
}

DeckScreen.propTypes = {
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

DeckScreen = connect(mapStateToProps, mapDispatchToActions)(DeckScreen)

export { DeckScreen }