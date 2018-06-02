import {SET_AUTHED_USER} from "../actions/authedUser";

export default function authedUser (state = null, action) { // using ES6 syntax to set default value of state to null
        switch (action.type) {
            case SET_AUTHED_USER:
                return action.id;
            default:
                return state;
        }
}