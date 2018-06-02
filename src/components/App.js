import React, { Component } from 'react'
import {connect} from 'react-redux';
import {handleInitialData} from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App);

// connect helps create a container/connected component that uses context to get the store using Provider/Context.Consumer component pair
// the first argument takes in the state that needs to be passed as props and the chained function takes in the component that needs to be passed this state along with the dispatch functionality
// this second function arguments represents the UI/Presentational component that will take in the state and dispatch and display the required UI