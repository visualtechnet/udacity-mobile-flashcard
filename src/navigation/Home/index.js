import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    return (
      <View>
        <Text>
          Hello Honey Ko My Love
        </Text>
      </View>
    )

  }
}

const mapStateToProps = state => ({
  
})

HomeScreen = connect(mapStateToProps)(HomeScreen)

export { HomeScreen }