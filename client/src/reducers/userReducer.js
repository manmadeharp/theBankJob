import React from 'react';

export const userReducer = (state = null, action) => {
    // return action
    switch (action.type) {
        case "loggedIn":
            return action.payload

        case "logOff":
            return action.payload

        default:
            return state

    }
};

