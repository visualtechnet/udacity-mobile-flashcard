import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button,  TextInput, Picker } from 'react-native'
import { connect } from 'react-redux'

class NewQuizScreen extends Component {  
  constructor(props) {
    super(props)

    this.state = {
      quizModel: {
        question: '',
        choices: [],
        answer: ''
      },
      selectedChoice: ''
    }
  }

  addQuestion = () => {

  }

  render() {
    return (
      <View>
        <Text>Enter Question</Text>
        <TextInput value={this.state.quizModel.question} />        
        <View>
          <Text>Enter Choices</Text>
          <Picker selectedValue={this.state.selectedChoice} onValueChange={ item => this.addQuestion(item)}>
            <Picker.Item label="asdf" value="adsfaffgahjj"></Picker.Item>
            <Picker.Item label="dasdsfgsd" value="adsffggggaf"></Picker.Item>
            <Picker.Item label="sdfgdsfgdg" value="adsffffafjj"></Picker.Item>
          </Picker>
        </View>)
        <Text>Enter Answer</Text>
        <TextInput value={this.state.quizModel.answer} />
        <Button title="SAVE" onPress={() => this.onSave}  />
      </View>
    )

  }
}

NewQuizScreen.propTypes = {
  quizzes: PropTypes.array
}

const mapStateToProps = state => ({
  quizzes: state.quiz.quizzes
})

NewQuizScreen = connect(mapStateToProps)(NewQuizScreen)

export { NewQuizScreen }