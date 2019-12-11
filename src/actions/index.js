//Registration actions

export const popUpAction = () => (dispatch, getState) => {
    const template = !getState().getData.template;
    dispatch({ type: "EDIT", payload: template });
};

export const enterSignUpAction = () => (dispatch) => {
    dispatch({ type: "SIGNUP", payload: true });
    dispatch({ type: "LOGIN", payload: false });
};

export const enterLogInAction = () => (dispatch) => {
    dispatch({ type: "SIGNUP", payload: false });
    dispatch({ type: "LOGIN", payload: true });
};

export const signUpAction = () => (dispatch, getState) => {
    dispatch({ type: "SIGNUP", payload: !getState().getData.signUp });
};

export const logInAction = () => (dispatch, getState) => {
    dispatch({ type: "LOGIN", payload: !getState().getData.logIn });
};

export const hideFormAction = () => (dispatch, getState) => {
    dispatch({ type: "HIDE_FORM", payload: !getState().getData.formBool });
};

export const hideLogInAction = () => (dispatch) => {
    dispatch({ type: "LOGIN_FORM", payload: false });
};

export const hideSignUpAction = () => (dispatch) => {
    dispatch({ type: "SIGNUP_FORM", payload: true });
};
//---------------

// Product actions

export const descriptionAction = (category, id) => (dispatch, getState) => {
    const { products } = getState().categories;
    const body = { ...products };
    products[category].map((item) => {
        if (item.id === id) {
            item.description.bool = true;
        }
        body[category].push(item);
    });
    dispatch({type: "DESCRIPTION", payload: body})
    console.log('action')
};
