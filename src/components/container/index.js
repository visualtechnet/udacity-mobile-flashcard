import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-navigation'
import { StatusBar } from 'react-native'
import { ContainerView } from './style'

const Container = ({ children }) => (
  <SafeAreaView>
    <StatusBar barStyle="light-content" backgroundColor="#fff" />
    <ContainerView>
      { children }
    </ContainerView>
  </SafeAreaView>
)

Container.propTypes = {
  children: PropTypes.any
}

export { Container }