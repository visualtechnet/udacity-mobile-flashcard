import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <View>
        <Text>
          Hello Home
        </Text>
      </View>
    )

  }
}

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps)(Home)