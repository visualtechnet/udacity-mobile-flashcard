import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text,  TextInput, Picker } from 'react-native'
import { connect } from 'react-redux'
import { ButtonMain } from '../../components';
import { ControlContainer, DeckView, DeckViewText } from './style'
import { Container } from '../../components'
import { withNavigation } from 'react-navigation'

class NewDeckScreen extends Component {  
  constructor(props) {
    super(props)

    this.state = {
      deckModel: {
        deckTitle: '',
        quizzes: []
      },
      selectedQuiz: '',
      availableQuizzes: []
    }
  }

  addQuiz = (item) => {
    const isQuizExists = this.state.quizzes.find(d => d === item);
    // const newQuiz = Object.assign({}, ...this.state.deckModel, )

    if(!isQuizExists) 
      this.setState({ quizzes: [ ...this.state.quizzes, item ], selectedQuiz: item });
    
  }

  onSave = () => {
    
  }

  render() {
    return (
      <Container>
        <DeckView>
          <DeckViewText>What is the title of your new deck?</DeckViewText>
          <TextInput value={this.state.deckModel.deckTitle} />
        </DeckView>
        <View>
          <Text>Add Quiz</Text>
          <Picker selectedValue={this.state.selectedQuiz} onValueChange={ item => this.addQuiz(item)}>
            <Picker.Item label="asdf" value="adsfaffgahjj"></Picker.Item>
            <Picker.Item label="dasdsfgsd" value="adsffggggaf"></Picker.Item>
            <Picker.Item label="sdfgdsfgdg" value="adsffffafjj"></Picker.Item>
          </Picker>
        </View>)
        <ControlContainer>
          <ButtonMain title="SAVE" onPress={() => this.onSave}  />          
        </ControlContainer>

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