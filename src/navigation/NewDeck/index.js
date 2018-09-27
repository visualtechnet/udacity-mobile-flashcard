import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { KeyboardAvoidingView, Picker, Alert } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { bindActionCreators } from 'redux';
import { ButtonMain, Container, TextControl } from '../../components'
import { ControlContainer, DeckView, DeckViewText, PickerView } from './style'
import { addDeck } from '../../state/deck/actions'
import { generateUID } from '../../utils/helper'

class NewDeckScreen extends Component {  
  constructor(props) {
    super(props)

    this.state = {      
      deckTitle: '',
      selectedQuiz: '',
      quizzes: [],
      deck: {
        id: 0,
        title: '',
        quizzes: [],
        dateCreated: ''
      }
    }
  }

  onAdd = () => {
    const isQuizExists = this.state.quizzes && this.state.quizzes.find(d => d === this.state.selectedQuiz)
    
    if(!isQuizExists) {
      let model = { 
        quizzes: this.state.quizzes, 
        title: this.state.deckTitle         
      }

      model.quizzes.push(this.state.selectedQuiz)

      this.setState({ deck: model });
      Alert.alert('Add Question', 'Question added.')
    } else {
      Alert.alert('Cannot Add Question', 'Question already added.')
    }
  }

  onSave = () => {
    const { addDeck, navigation, decks } = this.props 

    if(this.state.quizzes.length === 0) {
      Alert.alert('Unable to add deck', 'You must add at least one question')
    }

    if(this.state.deckTitle.length === 0) {
      Alert.alert('Unable to add deck', 'You must specify a title')
    }

    if(this.state.deck.quizzes.length > 0 && this.state.deck.title.length > 0) {
      const currentDate = new Date()
      const deck = Object.assign({}, this.state.deck, { id: generateUID(), dateCreated: `${currentDate.getMonth()}/${currentDate.getDate()}/${currentDate.getFullYear()}`})    
      addDeck(deck, decks)

      Alert.alert('Success', 'Deck added successfully')
      navigation.navigate('Home')
    }
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
            <ButtonMain title="SAVE" onPress={this.onSave}  />          
          </ControlContainer>
        </KeyboardAvoidingView>
      </Container>
    )

  }
}

NewDeckScreen.propTypes = {
  navigation: PropTypes.any,
  addDeck: PropTypes.any,
  quizzes: PropTypes.array,
  decks: PropTypes.array
}

const mapStateToProps = state => ({
  quizzes: state.quiz.quizzes,
  decks: state.deck.decks
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addDeck 
}, dispatch)

NewDeckScreen = connect(mapStateToProps, mapDispatchToProps)(withNavigation(NewDeckScreen))

export { NewDeckScreen }