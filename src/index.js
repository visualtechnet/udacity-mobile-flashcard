import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { AppLoading } from 'expo'
import { MainStack } from './components/nav'

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
    return <MainStack />      
  }
}
