import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './MainComponents/Routes';
import store from "./Redux/store"


class App extends Component {

  render() {
    return (
      <>
      <Provider store={store}>
        <Routes />
        </Provider>
      </>
    );
  }
}
export default App;
