import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class QuizScreen extends Component {
  static navigationOptions = {
    title: 'Quiz'
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