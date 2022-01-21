import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import PostsReducer from './Reducers/PostsReducer';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  postsState: PostsReducer,
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
