import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import FontAwesome from '@expo/vector-icons/FontAwesome';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',    
    drawerIcon: ({ tintColor }) => {
      <FontAwesome name="home" color={tintColor} />
    }
  })

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