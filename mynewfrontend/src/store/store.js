import { createStore, applyMiddleware } from "redux";
import users from '../reducers/users';
import thunk from 'redux-thunk';

export default () => {

    return createStore(users, applyMiddleware(thunk));
    
};