import React, { Component } from 'react'
import {
  View,
  FlatList
} from 'react-native'
import { APIManager } from '../utils'
import MessageRow from './MessageRow'
import actions from '../redux/actions'
import { connect } from 'react-redux'

class ListMessages extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  	  messages: []
  	}
  }

  componentDidMount(){
  	APIManager.get('https://mymessagebo-backend.herokuapp.com/api/message', null, (err, response) => {
  	  if (err) {
  	  	const msg = err.message || err
  	  	alert(msg)
  	  	return
  	  }

  	  console.log('componentDidMount: '+JSON.stringify(response))
  	  var results = response.results
  	  this.setState({
  	  	messages: results
  	  })
      this.props.messagesReceived(results)
  	})
  }

  render(){
  	return(
      <FlatList
        data = {
          this.props.messages.map((message, index) => {
            return (
              message
            )
          })
        }
        renderItem = {({ item, index }) => 
          <MessageRow message={item} index={index} />
        }
        keyExtractor = {( item, index ) => { 
          return index.toString()
        }}
      />
  	)
  }
}

const stateToProps = (state) => {
  return {
    messages: state.message.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    messagesReceived: (messages) => dispatch(actions.messagesReceived(messages))
  }
}

export default connect(stateToProps, dispatchToProps)(ListMessages)