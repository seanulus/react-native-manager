import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
