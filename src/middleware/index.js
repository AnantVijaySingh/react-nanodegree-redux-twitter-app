import logger from './logger';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';

export default applyMiddleware(
    thunk,
    logger
)

// ------- applyMiddleware -----------
// applyMiddleware takes in the middleware logic, the middlewares are called in the order they are passed as arguments
// middlewareName = (store) => (next) => (action_ => { } this is the standard syntax
// 'next' represents the next middleware function of the reducer


// ---------- Middleware --------------
// Middleware are called in between the dispatching of an action and invocation of a reducer which will produce a new state
// Mainly used to add input checks like checking for certain cases, async API calls, logging, crash reports etc
// Thunk is a 3rd party middleware that checks is an action returns a function instead of the required object and intercepts that and then processes it to the required object that can then be passed to the next middleware or the reducer
// Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

// ---------- Thunk working -------------
// If the thunk middleware sees an action, that action will be sent to the next middleware in line - the logger middleware.
// If it sees a function, the thunk middleware will call that function. That function can contain side effects - such as API calls - and dispatch actions, simple Javascript objects.
// These dispatched actions will again go to all of the middleware. The thunk middleware will see that it’s a simple action and pass the action on to the next middleware, the logger.

// INTERNAL THUNK CODE
// function createThunkMiddleware(extraArgument) {
//     return ({ dispatch, getState }) => next => action => {
//         if (typeof action === 'function') {
//             return action(dispatch, getState, extraArgument);
//         }
//         return next(action);
//     };
// }