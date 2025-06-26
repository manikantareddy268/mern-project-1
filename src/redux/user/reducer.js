import { CLEAR_USER, SET_USER } from "./actions";

export const useReducer = (state = null, action) => {
    switch (action.type) {
        // This case will help in supporting login case
        case SET_USER:
            return action.payload

        // This case will help in supporting logout usecase.
        case CLEAR_USER:
            return null;
        // Handels case where other state update triggers
        //userDetails' reducer
        default:
            return state;
    }
};