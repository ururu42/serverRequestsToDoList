import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { todosReducer, sorterReducer, searchFormReducer } from './reducers';
import { thunk } from 'redux-thunk';
// import { initialTodosState } from './reducers/todosReducer';
// import { initialSorterTodosState } from './reducers/sorterTodosReducer';

const reducer = combineReducers({
	todosState: todosReducer,
	sorterTodosState: sorterReducer,
	searchFormState: searchFormReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
