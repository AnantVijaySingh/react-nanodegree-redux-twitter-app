import {RECEIVE_TWEETS, TOGGLE_TWEET} from '../actions/tweets';

export default function tweets(state ={}, action) { // user ES6 syntax to set default state value to an empty object
    switch (action.type) {
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            };
        case TOGGLE_TWEET :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked === true
                        ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
                        : state[action.id].likes.concat([action.authedUser])
                }
            };
        default:
            return state
    }
}
// TO READ ---------- Notes ----------
// action creators take in the new data and attach the action type a return an object which the new data to update the Store
// reducers take in the previous state and the action and contain the logic which defines how the new state will be affected by the data passed by the action
// the switch case helps us define what kind of action is being passed and based on that the reducer decides what logic to call to manuplate the state
// we set default values for state as when the reducer is called for the first time during the invocation of createStore the state is not defined
