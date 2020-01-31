import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import ListMessages from './ListMessages'

class MessageBox extends Component {
  render(){
  	return(
      <View>
        <Text style={styles.heading}>My Message Board</Text>
        <ListMessages />
      </View>
  	)
  }
}

const styles = StyleSheet.create({
  heading: {
  	padding: 40,
  	fontSize: 30
  }
})

export default MessageBox