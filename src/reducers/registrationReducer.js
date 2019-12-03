const initState = {
    edit: false,
    signUp: null,
    logIn: null,
    formBool: true,
};

const registrationReducer = (state = initState, action) => {
    switch (action.type) {
        case "EDIT":
            return { ...state, edit: action.payload };
        case "SIGNUP":
            return { ...state, signUp: action.payload};
        case "LOGIN":
            return { ...state, logIn: action.payload};
        case "SIGNUP_FORM":
            return { ...state, formBool: action.payload};
        case "LOGIN_FORM":
            return { ...state, formBool: action.payload};
        case "HIDE_FORM":
            return { ...state, formBool: action.payload};
        default:
            return state;
    }
};

export default registrationReducer;