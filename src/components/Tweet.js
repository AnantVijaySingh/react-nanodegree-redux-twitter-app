import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatTweet, formatDate} from "../utils/helpers";
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline';
import TiHeartOutline from 'react-icons/lib/ti/heart-outline';
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline';
import {handleToggleTweet} from "../actions/tweets";
import {Link, withRouter} from 'react-router-dom';

class Tweet extends Component {

    handleLike = (e) => {
        e.preventDefault();

        const { dispatch, tweet, authedUser } = this.props;

        dispatch(handleToggleTweet({
            id: tweet.id,
            hasLiked: tweet.hasLiked,
            authedUser
        }))
    };

    toParent = (e,id) => {
        e.preventDefault()
        this.props.history.push(`/tweet/id${id}`)
    };

    render() {
        const {tweet} = this.props;

        if (tweet === null) {
            return <p>This tweet does not exist</p>
        }

        const {name, avatar, timestamp, text, hasLiked, likes, replies, parent, id} = tweet;

        return (
            <Link to={`/tweet/${id}`} className='tweet'>
                <img
                    src={avatar}
                    alt={`Author is ${name}`}
                    className='avatar'
                />
                <div className='tweet-info'>
                    <div>
                    <span>{name}</span>
                    <div>{formatDate(timestamp)}</div>
                    {
                        parent && (
                            <button className='replying-to' onClick={(e) => this.toParent(e,parent.id)}>
                                Replying to @{parent.author}
                            </button>
                        )
                    }
                    <p>{text}</p>
                    </div>
                    <div className='tweet-icons'>
                        <TiArrowBackOutline className='tweet-icon' />
                        <span>{replies !== 0 && (replies)}</span>
                        <button className='heart-button' onClick={this.handleLike}>
                            {
                                hasLiked ? <TiHeartFullOutline className='tweet-icon' color='#e0245e' />
                                    : <TiHeartOutline className='tweet-icon' />
                            }
                        </button>
                        <span>{likes !== 0 && likes}</span>
                    </div>
                </div>
            </Link>
        )
    }
}
//mapStateToProps(state, [ownProps]): stateProps]
//the second argument takes in the props passed from the parent component

function mapStateToProps({authedUser, tweets, users}, {id}) { //using object deconstruction to get the values from the state object that is passed to this function in the first argument
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null; // Avoiding error due to navigation to a tweet url that does not exist

    // These are the props that are passed to the UI component
    return {
        authedUser,
        tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null // Avoiding error due to navigation to a tweet url that does not exist
    }
}


export default withRouter(connect(mapStateToProps)(Tweet)) // withRouter is a higher order component that passes the Router props fro us to use, thus we can use history
