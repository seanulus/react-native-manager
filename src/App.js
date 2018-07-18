import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC3fLphi5Q1H1h1Ip-EMTEzO6lQC4MG3Pc',
      authDomain: 'manager-72ada.firebaseapp.com',
      databaseURL: 'https://manager-72ada.firebaseio.com',
      projectId: 'manager-72ada',
      storageBucket: 'manager-72ada.appspot.com',
      messagingSenderId: '344350989720'
  };
  firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
