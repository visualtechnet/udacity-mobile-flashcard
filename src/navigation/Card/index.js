import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text, Alert, FlatList } from 'react-native'
import { bindActionCreators } from 'redux';
import { getDeckWithQuestions } from '../../state/deck/actions'
import { addQuizAnswer, setAvailableQuiz, removeQuizAvailable } from '../../state/quiz/actions';
import { ButtonMain } from '../../components';
import { CardQuestionView, CardView, CardQuestion, ControlContainer, CardQuestionText, CardCategory, CardAnswer, CardAnswerText } from './style'

class CardScreen extends Component {      
  componentDidMount() {
    const { navigation, getDeckWithQuestions, decks, quizzes, deckWithQuestions, setAvailableQuiz } = this.props

    getDeckWithQuestions(navigation.getParam("key"), decks, quizzes)

    // randomize Quizzes
    setAvailableQuiz(deckWithQuestions.quizzes)        
  }   

  onAnswer = (quiz, answer, guess) => {
    const { navigation, addQuizAnswer, quizAnswers, removeQuizAvailable } = this.props
    const deckId = navigation.getParam("key")
    const hasQuestionAnswerOnDeck = quizAnswers.find(answer => answer.deckId === deckId && answer.questionId === quiz.id)

    if(!hasQuestionAnswerOnDeck) {
      const answers = [
        ...quizAnswers,
        {
          deckId,
          quiz: { ...quiz },
          answer,
          isCorrectAnswer: answer === quiz.answer,
          isGuessedAnswer: guess
        }
      ]

      addQuizAnswer(answers)

      Alert.alert('The Answer',`The answer given was ${answer}, the correct answer is ${quiz.answer}. You have guess it ${(answer === quiz.answer) === guess ? 'correct': 'wrong'}`, 
      [
        { text: 'OK', onPress:() => removeQuizAvailable()}
      ],
      { cancelable: false })
    }    
  }

  onShowAnswer = () => {

  }

  renderCardQuiz = () => {    
    const { quizAvailable } = this.props
        
    return quizAvailable.map(quiz => {
      const answer = quiz.choices.length > 0 && quiz.choices[0]

      return (
        <View key={quiz.id} style={{ position: 'relative' }}>
          <CardQuestionView>
            <CardQuestion>
              <CardQuestionText>{ quiz.question }</CardQuestionText>
            </CardQuestion>
            <CardAnswer>
              <CardAnswerText>
                { answer }                
              </CardAnswerText>
            </CardAnswer>
            <ControlContainer>
              <ButtonMain title="CORRECT" onPress={() => this.onAnswer(quiz, answer, true)}></ButtonMain>
              <ButtonMain title="INCORRECT" onPress={() => this.onAnswer(quiz, answer, false)}></ButtonMain>
            </ControlContainer>   
          </CardQuestionView>          
        </View>
      )
    })          
  }

  renderAnswerResult = item => {
    return (
      <View>
        <View>
          <Text>{ item.quiz.question }</Text>
          <Text>{ `Correct Answer ${item.quiz.answer}` }</Text>
          <Text>{ `Guessed Answer ${item.answer}` }</Text>
          <Text>{ `Your response ${item.isCorrectAnswer === item.isGuessedAnswer ? 'correct' : 'wrong'}` }</Text>
        </View>
      </View>
    )
  }

  renderResultQuiz = () => {
    const { quizAnswers } = this.props

    return (
      <FlatList data={quizAnswers} renderItem={this.renderAnswerResult} key={item => item.quiz.id}></FlatList>
    )    
  }

  displayDeckWithQuestions = () => {
    const { quizAvailable } = this.props

    if(quizAvailable) {
      return (
        <CardView>
          <CardCategory>{ quizAvailable.title }</CardCategory>          
          {
            quizAvailable.length > 0 && this.renderCardQuiz()
          }
          {
            quizAvailable.length === 0 && this.renderResultQuiz()
          }
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
  deckWithQuestions: PropTypes.any,
  quizAnswers: PropTypes.array,
  addQuizAnswer: PropTypes.any,
  setAvailableQuiz: PropTypes.any,
  quizAvailable: PropTypes.array,
  removeQuizAvailable: PropTypes.any
}

const mapStateToProps = state => ({
  decks: state.deck.decks,
  quizzes: state.quiz.quizzes,
  deckWithQuestions: state.deck.deckWithQuestions,
  quizAnswers: state.quiz.quizAnswers,
  quizAvailable: state.quiz.quizAvailable
})

const mapDispatchToActions = dispatch => bindActionCreators({
  getDeckWithQuestions,
  addQuizAnswer,
  setAvailableQuiz,
  removeQuizAvailable
}, dispatch)

CardScreen = connect(mapStateToProps, mapDispatchToActions)(CardScreen)

export { CardScreen }