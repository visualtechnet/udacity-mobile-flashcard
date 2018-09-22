import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class NewDeckScreen extends Component {
  static navigationOptions = {
    title: 'New Deck'
  }

  render() {
    return (
      <View>
        <Text>
          Hello New Deck
        </Text>
      </View>
    )

  }
}

const mapStateToProps = state => ({
  
})

NewDeckScreen = connect(mapStateToProps)(NewDeckScreen)

export { NewDeckScreen }