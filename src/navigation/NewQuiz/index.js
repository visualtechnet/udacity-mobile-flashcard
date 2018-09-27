import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Picker, Alert } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation'
import { Container, ButtonMain, TextControl } from '../../components'
import { ControlContainer, QuestionTextView, ChoicesView, Label, LabelView } from './style'
import { addQuiz } from '../../state/quiz/actions'
import { addQuizToDeck } from '../../state/deck/actions'
import { generateUID } from '../../utils/helper'

class NewQuizScreen extends Component {  
  constructor(props) {
    super(props)

    this.state = {
      question: '',
      answer: '',
      choices: [],
      choiceText1: '',      
      choiceText2: '',      
      choiceText3: '',      
      choiceText4: '',      
      choiceText5: ''
    }    
  }

  onClear = () => {
    this.setState({
      question: '',
      answer: '',
      choices: [],
      choiceText1: '',      
      choiceText2: '',      
      choiceText3: '',      
      choiceText4: '',      
      choiceText5: ''
    })
  }

  onSave = () => {
    const { quizzes, addQuiz, addQuizToDeck, decks, navigation } = this.props
    const { choiceText1, choiceText2, choiceText3, choiceText4, choiceText5, answer, question } = this.state
    const deckId = navigation.getParam('key')


    if(answer.length > 0 && question.length > 0) {      
      //Save'
      const choices = []
      const model = {
        id: generateUID(),
        question,
        answer,
        choices: []
      }

      if(choiceText1.length > 0)
        choices.push(choiceText1)
      if(choiceText2.length > 0)
        choices.push(choiceText2)
      if(choiceText3.length > 0)
        choices.push(choiceText3)
      if(choiceText4.length > 0)
        choices.push(choiceText4)
      if(choiceText5.length > 0)
        choices.push(choiceText5)
      
      model.choices = [ ...choices ]
      
      if(model.choices.length === 0) {
        Alert.alert('Error, Unable to save', 'You must create a question, at least one choice and an answer ')            
      } 

      if(deckId) {
        const currentDeck = decks.find(d => d.id === deckId)
        addQuiz(model, quizzes)
        addQuizToDeck(model, currentDeck, decks)
        this.onClear()
        Alert.alert('Quiz Add', 'Quiz Added Successfully')            
      }      
    } else {    
      Alert.alert('Error, Unable to save', 'You must create a question, at least one choice and an answer ')
    }
  }

  render() {    
    return (
      <Container>
        <QuestionTextView>
          <TextControl               
              placeholder="Enter Question"
              value={this.state.question} 
              onChangeText={question => this.setState({ question })}></TextControl>        
        </QuestionTextView>
        <ChoicesView>
            <TextControl               
              placeholder="Enter Choice 1"
              value={this.state.choiceText1} 
              onChangeText={choiceText1 => this.setState({ choiceText1 })}></TextControl>
            <TextControl               
              placeholder="Enter Choice 2"
              value={this.state.choiceText2} 
              onChangeText={choiceText2 => this.setState({ choiceText2 })}></TextControl>
            <TextControl               
              placeholder="Enter Choice 3"
              value={this.state.choiceText3} 
              onChangeText={choiceText3 => this.setState({ choiceText3 })}></TextControl>
            <TextControl               
              placeholder="Enter Choice 4"
              value={this.state.choiceText4} 
              onChangeText={choiceText4 => this.setState({ choiceText4 })}></TextControl>
            <TextControl               
              placeholder="Enter Choice 5"
              value={this.state.choiceText5} 
              onChangeText={choiceText5 => this.setState({ choiceText5 })}></TextControl>
        </ChoicesView>
        <LabelView><Label>Select an Answer</Label></LabelView>
        <Picker           
          selectedValue={this.state.answer} 
          onValueChange={(itemValue) => this.setState({ answer: itemValue })}>
          <Picker.Item label="Choice 1" value={this.state.choiceText1}></Picker.Item>
          <Picker.Item label="Choice 2" value={this.state.choiceText2}></Picker.Item>
          <Picker.Item label="Choice 3" value={this.state.choiceText3}></Picker.Item>
          <Picker.Item label="Choice 4" value={this.state.choiceText4}></Picker.Item>
          <Picker.Item label="Choice 5" value={this.state.choiceText5}></Picker.Item>
        </Picker>
        <ControlContainer>
          <ButtonMain title="SUBMIT" onPress={this.onSave}  />          
        </ControlContainer>
      </Container>
    )

  }
}

NewQuizScreen.propTypes = {
  quizzes: PropTypes.array,
  navigation: PropTypes.any,
  addQuizToDeck: PropTypes.any,
  addQuiz: PropTypes.any,
  decks: PropTypes.any
}

const mapStateToProps = state => ({
  quizzes: state.quiz.quizzes,
  decks: state.deck.decks
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addQuizToDeck,
  addQuiz
}, dispatch)

NewQuizScreen = connect(mapStateToProps, mapDispatchToProps)(withNavigation(NewQuizScreen))

export { NewQuizScreen }