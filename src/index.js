import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo'
import { Home } from './navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Main extends Component {
  render () {
    return <Home />
  }
}

