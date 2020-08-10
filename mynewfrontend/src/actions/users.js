//action are sent to store

import axios from '../axios/axios';

//called by add user function to set action type
const _addUser = (user) => ({
    type: 'ADD_USER',
    user
});

//get parameter as user and then returns an action by setting values from adduser file
export const addUser = (userData = {
    email: '',
    password: '',
    cpassword: '',
}) => {
    return (dispatch) => {
        const user = {
            email: userData.email,
            password: userData.password,
            cpassword: userData.cpassword,

        };
        //send to usercontroller.java
        return axios.post('users/create', user).then(result => {
            //save it in _addUser and send it to reducer
            //actions need to be objects and dispactched to reducer
            dispatch(_addUser(result.data));
        });
    };
};
//sets value for these by removeUser below function
const _removeUser = ({ id } = {}) => ({
  //action+changes are sent
    type: 'REMOVE_USER',
    id
});

//called in User.js file
export const removeUser = ({ id } = {}) => {
    return (dispatch) => {
        //send to java controller
        return axios.delete(`users/${id}`).then(() => {
            //dispatch to reducer after setting values in _removeuser
            dispatch(_removeUser({ id }));
        })
    }
};

const _editUser = (id, updates) => ({
    type: 'EDIT_USER',
    id,
    updates
});

// called from edituser
export const editUser = (id, updates) => {
    return (dispatch) => {
        //send url and data to db
        return axios.put(`users/${id}`, updates).then(() => {
            //1.called _edituser and set the values of type and is and updates
            // 2. dispatched it to the store
            dispatch(_editUser(id, updates));
        });
    }
};

const _getUsers = (users) => ({
    type: 'GET_USERs',
    users
});
//called in app.js
export const getUsers = () => {
    return (dispatch) => {
        return axios.get('users').then(result => {
            const users = [];

            result.data.forEach(item => {
                users.push(item);
            });
            dispatch(_getUsers(users));
        });
    };
};
