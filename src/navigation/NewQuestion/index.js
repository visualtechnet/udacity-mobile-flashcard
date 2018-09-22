import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class NewQuestionScreen extends Component {
  static navigationOptions = {
    title: 'New Question'
  }

  render() {
    return (
      <View>
        <Text>
          Hello NewQuestionScreen
        </Text>
      </View>
    )

  }
}

const mapStateToProps = state => ({
  
})

NewQuestionScreen = connect(mapStateToProps)(NewQuestionScreen)

export { NewQuestionScreen }