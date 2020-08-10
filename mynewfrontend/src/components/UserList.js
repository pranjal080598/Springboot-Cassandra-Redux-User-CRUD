import React from 'react';
import { connect } from 'react-redux';
import User from './User';

const UserList = (props) => (
    <div>
        User List:
        <ul>
            {props.users.map(user => {
                return (
                    //key for defining unique
                    <li key={user.id}>

                        <User {...user} />
                    </li>
                );
            })}
        </ul>

    </div>
);

const mapStateToProps = (state) => {
    return {
        users: state
    };
}

export default connect(mapStateToProps)(UserList);