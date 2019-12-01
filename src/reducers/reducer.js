const initState = {
    body: [],
    edit: false,
    signUp: true
};

const popUpReducer = (state = initState, action) => {
    switch (action.type) {
        case "EDIT":
            return { ...state, edit: action.payload };
        case "SIGNUP":
            return { ...state, signUp: action.payload};
        case "LOGIN":
            return { ...state, signUp: action.payload};
        default:
            return state;
    }
};

export default popUpReducer;