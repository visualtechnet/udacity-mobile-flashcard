import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

class NewDeckScreen extends Component {
  static navigationOptions = {
    title: 'New Deck',
    drawerLabel: 'New Deck',
    drawerIcon: ({ tintColor }) => {
      <MaterialIcons name="library-add" color={tintColor} />
    }
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