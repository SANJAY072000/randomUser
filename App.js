import React, { Component } from 'react';
import {Provider} from 'react-redux';
import ApiData from './components/ApiData';
import store from './redux/store/store';

export default class App extends Component{
  render(){
    return (
      <Provider store={store}>
      <ApiData/>
      </Provider>
    );
  }
}


