import {saveLikeToggle, saveTweet} from "../utils/api";
import {showLoading, hideLoading} from 'react-redux-loading';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';
export const ADD_TWEET = 'ADD_TWEET';

export function receiveTweets (tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}

function toggleTweet({ id, authedUser, hasLiked }) {
    return {
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}

export function handleToggleTweet (info) {
    return (dispatch) => {
        // Optimistic update
        dispatch(toggleTweet(info));
        return saveLikeToggle(info)
            .catch((e) => {
                console.warn('Error in toggle tweet', e);
                dispatch(toggleTweet(info));
                alert('Error in toggle tweet, please try again');
            })
    }
}

function addTweet(tweet) {
    return {
        type: ADD_TWEET,
        tweet
    }
}

export function handleAddTweet (text, replyingTo) {
    return (dispatch, getState) => {

        dispatch(showLoading());

        return saveTweet({
            text,
            author: getState().authedUser,
            replyingTo
        })
            .then((tweet) => dispatch(addTweet(tweet)))
            .then(() => dispatch(hideLoading()))
    }
}