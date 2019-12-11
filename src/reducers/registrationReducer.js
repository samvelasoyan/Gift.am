import { EDIT, SIGNUP, LOGIN, SIGNUP_FORM, LOGIN_FORM, HIDE_FORM } from "../Constants";

const ACTION_HANDLERS = {
    [EDIT]: (state, action) => {
        return {
            ...state,
            template: action.payload
        };
    },
    [SIGNUP]: (state, action) => {
        return {
            ...state,
            signUp: action.payload
        };
    },
    [LOGIN]: (state, action) => {
        return {
            ...state,
            logIn: action.payload
        };
    },
    [SIGNUP_FORM]: (state, action) => {
        return {
            ...state,
            formBool: action.payload
        };
    },
    [LOGIN_FORM]: (state, action) => {
        return {
            ...state,
            formBool: action.payload
        };
    },
    [HIDE_FORM]: (state, action) => {
        return {
            ...state,
            formBool: action.payload
        };
    }
};
const initialState = {
    template: false,
    signUp: null,
    logIn: null,
    formBool: true
};

const registrationReducer = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};
export default registrationReducer;