/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import MessageBox from './src/components/MessageBox';
import {name as appName} from './app.json';
import store from './src/redux/store'
import { Provider } from 'react-redux'

class App extends Component {
  render(){
  	return(
  	  <Provider store={store.configureStore()}>
        <MessageBox />
  	  </Provider>
  	)
  }
}

AppRegistry.registerComponent(appName, () => App);
