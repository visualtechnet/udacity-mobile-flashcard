import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Deck'
  }

  render() {
    return (
      <View>
        <Text>
          Hello DeckScreen
        </Text>
      </View>
    )

  }
}

const mapStateToProps = state => ({
  
})

DeckScreen = connect(mapStateToProps)(DeckScreen)

export { DeckScreen }