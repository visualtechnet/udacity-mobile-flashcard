import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MainDrawer } from './components/nav'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadQuiz } from './state/quiz/actions'
import { loadDecks } from './state/deck/actions'

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

Main.propTypes = {
  loadQuiz: PropTypes.any,
  loadDecks: PropTypes.any
}

const mapStateToProps = state => ({
  decks: state.deck.decks
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadQuiz,
  loadDecks
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)