import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {
  render() {
    return (
      <View>
        <Text>
          Hello Deck
        </Text>
      </View>
    )

  }
}

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps)(Deck)