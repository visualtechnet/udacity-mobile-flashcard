import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { AppLoading } from 'expo'
import { MainStack } from './components/nav'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadQuiz } from './state/quiz/actions'
import { loadDecks } from './state/deck/actions'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Main extends Component {  
  componentDidMount() {
    const { loadQuiz, loadDecks } = this.props
    
    console.log('Loading Quizzes and Decks')
    loadQuiz()
    loadDecks()
  }

  render () {
    return <MainStack />      
  }
}


const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadQuiz,
  loadDecks
}, dispatch)

Main = connect(mapStateToProps, mapDispatchToProps)(Main)

export default Main