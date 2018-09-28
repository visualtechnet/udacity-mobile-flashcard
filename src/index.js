import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppLoading } from 'expo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { MainDrawer } from './components/nav'
import { loadQuiz } from './state/quiz/actions'
import { loadDecks } from './state/deck/actions'
import { Promise } from 'bluebird'
import { setLocationNotification } from './utils/notifications'
//import { AsyncStore } from './storage';

class Main extends Component {     
  constructor(props)  {
    super(props)

    this.state = {
      isReady: false
    }    

    //AsyncStore.clear()
  }

  componentDidMount() {
    setLocationNotification()
  }

  loadData = () => {
    const { loadQuiz, loadDecks } = this.props  
    
    return Promise.all([loadQuiz(), loadDecks()])
  }

  render () {    
    if(!this.state.isReady) {      
      return <AppLoading
        startAsync={() => this.loadData()}
        onFinish={() => this.setState({ isReady: true })}
        />
    }
    else {      
      return <MainDrawer />
    }
  }
}

Main.propTypes = {
  loadQuiz: PropTypes.any,
  loadDecks: PropTypes.any
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loadDecks,
  loadQuiz
}, dispatch)


export default connect(null, mapDispatchToProps)(Main)