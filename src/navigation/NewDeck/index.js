import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { KeyboardAvoidingView, Picker, Alert } from 'react-native'
import { connect } from 'react-redux'
import { ButtonMain } from '../../components';
import { ControlContainer, DeckView, DeckViewText, PickerView } from './style'
import { Container } from '../../components'
import { withNavigation } from 'react-navigation'
import { TextControl } from '../../components/textControl'

class NewDeckScreen extends Component {  
  constructor(props) {
    super(props)

    this.state = {
      deckTitle: '',
      selectedQuiz: '',
      quizzes: [],
      model: {
        title: '',
        quizzes: []
      }
    }
  }

  onAdd = () => {
    const isQuizExists = this.state.quizzes.find(d => d === this.state.selectedQuiz)
    
    if(!isQuizExists) {
      let model = { 
        model: {
          quizzes: this.state.quizzes, 
          title: this.state.deckTitle 
        }
      }

      model.model.quizzes.push(this.state.selectedQuiz)

      this.setState({ model });
      Alert.alert('Add Question', 'Question added.')
    } else {
      Alert.alert('Cannot Add Question', 'Question already added.')
    }
  }

  onSave = () => {
    
  }

  renderQuizPicker = () => {
    const { quizzes } = this.props

    return (
      <PickerView>
        <Picker 
          selectedValue={this.state.selectedQuiz} 
          onValueChange={(itemValue) => this.setState({ selectedQuiz: itemValue })}>
          {
            quizzes && quizzes.map(quiz => {
              return (
                <Picker.Item key={quiz.id} label={quiz.question} value={quiz.id}></Picker.Item>
              )
            })
          }
        </Picker>
      </PickerView>
    )
  }

  render() {
    return (
      <Container>
        <KeyboardAvoidingView>
          <DeckView>
            <DeckViewText>What is the title of your new deck?</DeckViewText>
            <TextControl 
              placeholder="Enter Title of New Deck"
              value={this.state.deckTitle} 
              onChangeText={(deckTitle) => this.setState({ deckTitle })}></TextControl>          
          </DeckView>
          {
            this.renderQuizPicker()
          }
          <ControlContainer>
            <ButtonMain title="ADD QUESTION" onPress={this.onAdd} />
            <ButtonMain title="SAVE" onPress={() => this.onSave}  />          
          </ControlContainer>
        </KeyboardAvoidingView>
      </Container>
    )

  }
}

NewDeckScreen.propTypes = {
  quizzes: PropTypes.array,
  navigation: PropTypes.any
}

const mapStateToProps = state => ({
  quizzes: state.quiz.quizzes
})

NewDeckScreen = connect(mapStateToProps)(withNavigation(NewDeckScreen))

export { NewDeckScreen }