import {getInitialData} from "../utils/api";
import {receiveTweets} from "./tweets";
import {receiveUsers} from "./users";
import {setAuthedUser} from "./authedUser";
import {showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users,tweets}) => {
                dispatch(receiveTweets(tweets));
                dispatch(receiveUsers(users));
                dispatch(setAuthedUser(AUTHED_ID));
                dispatch(hideLoading())
        })
    }
}

// Because this action returns a function instead of a plan JS object we will need to use thunk from redux-thunk package as a middleware
// Thunk will intercept any action creator that returns a function and will first run it before calling the reducer
// We use thunk for making async calls as we don't want to update the store without ensuring that the same update was successfully made in the central DB via tha API call