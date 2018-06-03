import React, {Component} from 'react';
import  {connect} from 'react-redux';
import Tweet from './Tweet';

class Dashboard extends Component {
    render() {
        const {tweetIds} = this.props;
        return (
            <div>
                <h3 className='center'>TIME LINE</h3>
                <ul className='dashboard-list'>
                    {
                        tweetIds.map((id) => (
                            <li key={id}>
                                <Tweet id={id} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tweetIds: Object.keys(state.tweets)
            .sort((a,b) => state.tweets[b].timeStamp = state.tweets[a].timeStamp)
    }
}


export default connect(mapStateToProps)(Dashboard)


// ------------ NOTES -------------
// Connect function prototype
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])


// [mapStateToProps(state, [ownProps]): stateProps] (Function): If this argument is specified, the new component will subscribe to Redux store updates.
// This means that any time the store is updated, mapStateToProps will be called. The results of mapStateToProps must be a plain object, which will be merged into the component’s props.
// If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.
//
// If your mapStateToProps function is declared as taking two parameters, it will be called with the store state as the first parameter and the props passed to the connected component as the second parameter,
// and will also be re-invoked whenever the connected component receives new props as determined by shallow equality comparisons. (The second parameter is normally referred to as ownProps by convention.)
