export const popUpAction = () => (dispatch, getState) => {
    const edit = !getState().getData.edit
    dispatch({type: 'EDIT', payload: edit})
}

export const signUp = () => dispatch => {
    dispatch({type: 'SIGNUP', payload: true})
}

export const logIn = () => dispatch => {
    dispatch({type: 'LOGIN', payload: false})
}

export const hideSignUp = () => dispatch => {
    dispatch({type: 'SIGNUP_FORM', payload: true})
}

export const hideLogIn = () => dispatch => {
    dispatch({type: 'LOGIN_FORM', payload: false})
}