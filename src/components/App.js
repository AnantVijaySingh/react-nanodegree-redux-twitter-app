import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import {handleInitialData} from "../actions/shared";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import NewTweet from './NewTweet';
import LoadingBar from 'react-redux-loading';
import TweetPage from './TweetPage';
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
        <Router>
            <Fragment> {/**We can only pass one element to the Router, so we would require to put our Loading Bar inside our container Dai, Fragment allows us to circumvent that without adding another external container div **/}
                <LoadingBar />
                <div className='container'>
                    <Nav/>
                    {
                        this.props.loading
                            ? null
                            : (
                                <div>
                                    <Route path='/' exact component={Dashboard}/>
                                    <Route path='/new' component={NewTweet}/>
                                    <Route path='/tweet/:id' component={TweetPage} />
                                </div>
                            )
                    }
                </div>
            </Fragment>
        </Router>
    )
  }
}

function mapStateToProps(state) {
    return {
        loading: state.authedUser === null
    }

}

export default connect(mapStateToProps)(App);

// connect helps create a container/connected component that uses context to get the store using Provider/Context.Consumer component pair
// the first argument takes in the state that needs to be passed as props and the chained function takes in the component that needs to be passed this state along with the dispatch functionality
// this second function arguments represents the UI/Presentational component that will take in the state and dispatch and display the required UI