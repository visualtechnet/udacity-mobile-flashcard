import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Entypo from '@expo/vector-icons/Entypo';

class NewQuestionScreen extends Component {
  static navigationOptions = {
    title: 'New Question',
    drawerLabel: 'New Question',
    drawerIcon: ({ tintColor }) => {
      <Entypo name="add-to-list" color={tintColor} />
    }
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