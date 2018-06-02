import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatTweet, formatDate} from "../utils/helpers";
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline';
import TiHeartOutline from 'react-icons/lib/ti/heart-outline';
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline';

class Tweet extends Component {

    handleLike = (e) => {
        e.preventDefault();
        // increase or decrease the like count
    };

    toParent = (e,id) => {
        e.preventDefault()
        // redirect to parent tweet logic
    };

    render() {
        const {tweet} = this.props;

        if (tweet === null) {
            return <p>This tweet does not exist</p>
        }

        const {name, avatar, timestamp, text, hasLiked, likes, replies, parent} = tweet;

        return (
            <div className='tweet'>
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
            </div>
        )
    }
}
//mapStateToProps(state, [ownProps]): stateProps]
//the second argument takes in the props passed from the parent component

function mapStateToProps({authedUser, tweets, users}, {id}) { //using object deconstruction to get the values from the state object that is passed to this function in the first argument
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null; // Avoiding error due to navigation to a tweet url that does not exist

    return {
        authedUser,
        tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null // Avoiding error due to navigation to a tweet url that does not exist
    }
}


export default connect(mapStateToProps)(Tweet)
