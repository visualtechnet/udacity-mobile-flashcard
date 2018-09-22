import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Foundation from '@expo/vector-icons/Foundation';

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Deck',    
    drawerLabel: 'Deck',
    drawerIcon: ({ tintColor }) => {
      <Foundation name="list" color={tintColor} />
    }
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