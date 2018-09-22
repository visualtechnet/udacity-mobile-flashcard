import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends Component {
  render() {
    return (
      <View>
        <Text>
          Hello Quiz
        </Text>
      </View>
    )

  }
}

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps)(Quiz)