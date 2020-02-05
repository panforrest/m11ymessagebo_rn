import React, { Component } from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native'
import { APIManager } from '../utils'

class AddMessage extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  	  user: '',
  	  messageBody: ''
  	}
  }

  handleSubmit = () => {
    APIManager.post('https://mymessagebo-backend.herokuapp.com/api/message', this.state, (err, response) => {
      if (err) {
      	var msg = err.message || err
      	alert(msg)
      	return
      }

      console.log(JSON.stringify(response))
    })
  }

  render(){
  	return (
     <View> 
      <TextInput
        style={styles.input}
        value={this.state.user}
        onChangeText={ user => {this.setState
          ({ user: user })
        }}
        placeholder="User"
      />

      <TextInput
        style={styles.input}
        value={this.state.messageBody}
        onChangeText={ messageBody => {this.setState
          ({ messageBody: messageBody })
        }}
        placeholder="Message Body"
      />

      <TouchableOpacity 
        onPress={this.handleSubmit}
        style={styles.button}
      >
        <Text style={styles.buttonText}> SUBMIT </Text>
      </TouchableOpacity>
     </View> 
  	)
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5f5F5'
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff'
  },
  buttonText: {
    textAlign: 'center',
    padding: 5,
    color: 'black'
  }
})

export default AddMessage