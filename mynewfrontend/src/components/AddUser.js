import React from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { addUser } from '../actions/users';

const AddUser = (props) => (
    <div>
        <h3>Set User information:</h3>
        {/* user form file import */}
        <UserForm
        // function specified in user form is invoked here
        // user has all data
            onSubmitUser={(user) => {
                //action is dispatched to actions->users.js
                props.dispatch(addUser(user));
                //pushes new entry in history stack and redirects user to dashboard page
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddUser);
