import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button,  TextInput, Picker } from 'react-native'
import { connect } from 'react-redux'


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
      <View>
        <Text>Enter Deck Name</Text>
        <TextInput value={this.state.deckModel.deckTitle} />        
        <View>
          <Text>Add Quiz</Text>
          <Picker selectedValue={this.state.selectedQuiz} onValueChange={ item => this.addQuiz(item)}>
            <Picker.Item label="asdf" value="adsfaffgahjj"></Picker.Item>
            <Picker.Item label="dasdsfgsd" value="adsffggggaf"></Picker.Item>
            <Picker.Item label="sdfgdsfgdg" value="adsffffafjj"></Picker.Item>
          </Picker>
        </View>)
        <Button title="SAVE" onPress={() => this.onSave}  />
      </View>
    )

  }
}

NewDeckScreen.propTypes = {
  quizzes: PropTypes.array
}

const mapStateToProps = state => ({
  quizzes: state.quiz.quizzes
})

NewDeckScreen = connect(mapStateToProps)(NewDeckScreen)

export { NewDeckScreen }