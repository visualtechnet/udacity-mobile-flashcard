import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Alert, FlatList } from 'react-native'
import { bindActionCreators } from 'redux'
import { getDeckWithQuestions } from '../../state/deck/actions'
import { addQuizAnswer, setAvailableQuiz, removeQuizAvailable, clearQuizAnswers } from '../../state/quiz/actions'
import { ButtonMain } from '../../components'
import { clearLocationNotifications, setLocationNotification } from '../../utils/notifications'
import { 
  CardQuestionView, 
  CardView, 
  CardQuestion, 
  ControlContainer, 
  CardQuestionText, 
  CardCategory, 
  CardAnswer, 
  CardAnswerText,
  AnswerResultView,
  AnswerQuestion,
  AnswerQuestionSubText,
  AnswerQuestionCorrect,
  AnswerQuestionIncorrect,
  ResultView,
  ResultViewSummaryText,
  ResultViewTitle,
  ResultButtons
} from './style'
import { Container } from '../../components'

class CardScreen extends Component {      
  componentDidMount() {
       this.setQuiz()
  }   

  setQuiz = () => {
    const { navigation, getDeckWithQuestions, decks, quizzes, deckWithQuestions, setAvailableQuiz, clearQuizAnswers } = this.props

    getDeckWithQuestions(navigation.getParam("key"), decks, quizzes)

    // Ensure we clear answers
    clearQuizAnswers()

    // randomize Quizzes
    setAvailableQuiz(deckWithQuestions.quizzes)   
  }

  onAnswer = (quiz, answer, guess) => {
    const { navigation, decks, addQuizAnswer, quizAnswers, removeQuizAvailable } = this.props
    const deckId = navigation.getParam("key")
    const hasQuestionAnswerOnDeck = quizAnswers.find(answer => answer.deckId === deckId && answer.questionId === quiz.id)
    const currentDeck = decks.find(d => d.id === deckId)
    const deckTitle = currentDeck && currentDeck.title
    
    if(!hasQuestionAnswerOnDeck) {
      const answers = [
        ...quizAnswers,
        {
          deckId,
          deckTitle,
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
              <ButtonMain title="CORRECT" onPress={() => this.onAnswer(quiz, answer, true)} style={{ backgroundColor: '#77966d' }}></ButtonMain>
              <ButtonMain title="INCORRECT" onPress={() => this.onAnswer(quiz, answer, false)} style={{ backgroundColor: '#801515' }}></ButtonMain>
            </ControlContainer>   
          </CardQuestionView>          
        </View>
      )
    })          
  }

  renderAnswerResult = ({ item }) => {    
    return (
      <AnswerResultView>        
        <AnswerQuestion>{ item.quiz.question }</AnswerQuestion>
        <AnswerQuestionSubText>{ `Correct Answer ${item.quiz.answer}` }</AnswerQuestionSubText>
        <AnswerQuestionSubText>{ `Guessed Answer ${item.answer}` }</AnswerQuestionSubText>
        {
          item.isCorrectAnswer === item.isGuessedAnswer && 
          <AnswerQuestionCorrect>{ `Your response ${item.isCorrectAnswer === item.isGuessedAnswer ? 'correct' : 'wrong'}` }</AnswerQuestionCorrect>
        }
        {
          item.isCorrectAnswer !== item.isGuessedAnswer && 
          <AnswerQuestionIncorrect>{ `Your response ${item.isCorrectAnswer === item.isGuessedAnswer ? 'correct' : 'wrong'}` }</AnswerQuestionIncorrect>
        }
        
      </AnswerResultView>
    )
  }

  restartQuiz = () => {
    this.setQuiz();
  }

  renderResultQuiz = () => {
    const { quizAnswers, navigation } = this.props
        
    if(quizAnswers && quizAnswers.length > 0) {      
      const deckId = navigation.getParam("key")
      const totalCorrect = quizAnswers.filter(answers => answers.isCorrectAnswer === answers.isGuessedAnswer).length
      const totalIncorrect = quizAnswers.filter(answers => answers.isCorrectAnswer !== answers.isGuessedAnswer).length
            
      clearLocationNotifications()
          .then(setLocationNotification)
      return (
        <ResultView>
          <ResultViewTitle>
            { quizAnswers[0].deckTitle }
          </ResultViewTitle>
          <ResultViewSummaryText>            
            {`Total Questions: ${quizAnswers.length}`}
          </ResultViewSummaryText>
          <ResultViewSummaryText>
            {`Total Correct: ${totalCorrect}`}
          </ResultViewSummaryText>
          <ResultViewSummaryText>
            {`Total Wrong: ${totalIncorrect}`}
          </ResultViewSummaryText>
          <FlatList data={quizAnswers} 
            renderItem={this.renderAnswerResult} 
            keyExtractor={item => item.quiz.id}></FlatList>
          <ResultButtons>
            <ButtonMain title="RESTART QUIZ" onPress={() => this.restartQuiz()} style={{ backgroundColor: '#77966d' }}></ButtonMain>
            <ButtonMain title="BACK TO DECK" onPress={() => navigation.navigate('Deck', { "id": deckId })} style={{ backgroundColor: '#77966d' }}></ButtonMain>
          </ResultButtons>
        </ResultView>
      )    
    }
  }

  displayDeckWithQuestions = () => {
    const { quizAvailable } = this.props

    if(quizAvailable) {
      return (
        <Container>
          <CardView>
            <CardCategory>{ quizAvailable.title }</CardCategory>          
            {
              quizAvailable.length > 0 && this.renderCardQuiz()
            }
            {
              quizAvailable.length === 0 && this.renderResultQuiz()
            }
          </CardView>
        </Container>
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
  removeQuizAvailable: PropTypes.any,
  clearQuizAnswers: PropTypes.any
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
  removeQuizAvailable,
  clearQuizAnswers
}, dispatch)

CardScreen = connect(mapStateToProps, mapDispatchToActions)(CardScreen)

export { CardScreen }