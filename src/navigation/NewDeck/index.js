import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class NewDeck extends Component {
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

export default connect(mapStateToProps)(NewDeck)