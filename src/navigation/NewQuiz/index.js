import React, { Component } from 'react'
import { View, Text, Button,  TextInput, Picker } from 'react-native'
import { connect } from 'react-redux'
import Entypo from '@expo/vector-icons/Entypo';

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

  addQuestion = (item) => {

  }

  render() {
    return (
      <View>
        <Text>Enter Question</Text>
        <TextInput value={this.state.quizModel.question} />        
        <View>
          <Text>Enter Choices</Text>
          <Picker selectedValue={this.state.selectedChoice} onValueChange={(item, index) => this.addQuestion(item)}>
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

const mapStateToProps = state => ({
  
})

NewQuizScreen = connect(mapStateToProps)(NewQuizScreen)

export { NewQuizScreen }