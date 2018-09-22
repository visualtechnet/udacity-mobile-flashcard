import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

class QuizScreen extends Component {
  static navigationOptions = {
    title: 'Quiz',
    drawerLabel: 'Quiz',
    drawerIcon: ({ tintColor }) => {
      <MaterialIcons name="question-answer" color={tintColor} />
    }
  }

  render() {
    return (
      <View>
        <Text>
          Hello QuizScreen
        </Text>
      </View>
    )

  }
}

const mapStateToProps = state => ({
  
})

QuizScreen = connect(mapStateToProps)(QuizScreen)

export { QuizScreen }