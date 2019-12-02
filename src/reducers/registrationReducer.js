const initState = {
    edit: false,
    signUp: true,
    formBool: true,
};

const registrationReducer = (state = initState, action) => {
    switch (action.type) {
        case "EDIT":
            return { ...state, edit: action.payload };
        case "SIGNUP":
            return { ...state, signUp: action.payload};
        case "LOGIN":
            return { ...state, signUp: action.payload};
        case "SIGNUP_FORM":
            return { ...state, formBool: action.payload};
        case "LOGIN_FORM":
            return { ...state, formBool: action.payload};
        default:
            return state;
    }
};

export default registrationReducer;