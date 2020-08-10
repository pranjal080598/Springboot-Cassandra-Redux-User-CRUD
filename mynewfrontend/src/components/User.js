//remove user
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser } from '../actions/users';

const User = ({ id, email, cpassword, password, dispatch }) => (
    <div>
        <Link to={`/user/${id}`}>
            <h4>{email}</h4>
        </Link>
        <p>Author: {password}</p>
        {cpassword && <p>{cpassword}</p>}
        {/* when remove button is clicked */}
        <button onClick={() => {
            //send action to actions->users.js
            dispatch(removeUser({ id }));
        }}>Remove</button>
    </div>
);

export default connect()(User);