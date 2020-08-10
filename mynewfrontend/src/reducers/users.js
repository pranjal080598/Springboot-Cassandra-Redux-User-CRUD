//reducer-state change for actions
//Reducers specify how the application's state changes in response to actions sent to the store.
//Remember that actions only describe what happened, but don't describe how the application's state changes.
//action sent to reducer to set state and then reducer to store

const usersReducerDefaultState = [];
//list of state to maintain previous state
//set defualy state to empty

export default (state = usersReducerDefaultState, action) => {
    //switch on what action has come
    switch (action.type) {
        case 'ADD_USER':
            //change state and return to action
            return [
                //... to copy old state to new state
                ...state,
                //send action to store
                //action.user: action=add_user and .user is set in _adduser
                action.user
            ];
        case 'REMOVE_USER':
            //set state id as this one
            //show only ones which doesnt match .. remove matched one
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_USER':
            return state.map((user) => {
                if (user.id === action.id) {
                    return {
                        ...user,
                        ...action.updates
                    };
                } // if not modified
                else {
                    return user;
                }
            });
        case 'GET_USERs':
            return action.users;
        default:
            return state;
    }
};
