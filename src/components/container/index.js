import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-navigation'
import { StatusBar, ScrollView } from 'react-native'
import { ContainerView } from './style'

const Container = ({ children }) => (  
  <SafeAreaView style={{ flex: 1, backgroundColor: "#fff"}}>
    <StatusBar barStyle="light-content" backgroundColor="#fff" />
    <ContainerView>
      <ScrollView>
        { children }
      </ScrollView>
    </ContainerView>
  </SafeAreaView>  
)

Container.propTypes = {
  children: PropTypes.any
}

export { Container }