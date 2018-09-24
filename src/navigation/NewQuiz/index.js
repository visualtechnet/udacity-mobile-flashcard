import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, Picker } from 'react-native'
import { connect } from 'react-redux'
import { Container, ButtonMain } from '../../components'
import { ControlContainer } from './style'
import { withNavigation } from 'react-navigation'

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
    const { navigation } = this.props

    return (
      <Container>
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
        <ControlContainer>
          <ButtonMain title="SUBMIT" onPress={() => this.onSave}  />
          <ButtonMain title="GO BACK" onPress={() => navigation.goBack()}  />
        </ControlContainer>
      </Container>
    )

  }
}

NewQuizScreen.propTypes = {
  quizzes: PropTypes.array,
  navigation: PropTypes.any
}

const mapStateToProps = state => ({
  quizzes: state.quiz.quizzes
})

NewQuizScreen = connect(mapStateToProps)(withNavigation(NewQuizScreen))

export { NewQuizScreen }