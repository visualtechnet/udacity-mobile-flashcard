import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { AppLoading } from 'expo'
import { MainDrawer } from './components/nav'
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
    loadQuiz()
    loadDecks()
  }

  render () {
    return <MainDrawer />
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