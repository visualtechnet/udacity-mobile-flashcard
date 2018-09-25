import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Picker } from 'react-native'
import { connect } from 'react-redux'
import { Container, ButtonMain, TextControl } from '../../components'
import { withNavigation } from 'react-navigation'
import { ControlContainer, QuestionTextView, ChoicesView } from './style'

class NewQuizScreen extends Component {  
  constructor(props) {
    super(props)

    this.state = {
      question: '',
      answer: '',
      choices: [],
      quiz: {
        question: '',
        answer: '',
        choices: []
      },
      choiceText1: '',      
      choiceText2: '',      
      choiceText3: '',      
      choiceText4: '',      
      choiceText5: ''
    }
  }

  onSave = () => {
    // const { navigation } = this.props    
    
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
  navigation: PropTypes.any
}

const mapStateToProps = state => ({
  quizzes: state.quiz.quizzes
})

NewQuizScreen = connect(mapStateToProps)(withNavigation(NewQuizScreen))

export { NewQuizScreen }