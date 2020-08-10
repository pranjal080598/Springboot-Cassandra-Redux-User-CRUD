import React from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { editUser } from '../actions/users';
import users from '../reducers/users';

const EditUser = (props) => (
    <div className='container__box'>
        <UserForm
            user={props.user}
            //seted new values are passed from userform into user
            onSubmitUser={(user) => {
                // pass it to actions flder users.js
                props.dispatch(editUser(props.user.id, user));
                //save to new history stack and redirect to dashboard page
                props.history.push('/');
            }}
        />
    </div>
);

//maps state to props for editUser
const mapStateToProps = (state, props) => {
    return {
        user: state.find((user) =>
            user.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditUser);