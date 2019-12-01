export const popUpAction = () => (dispatch, getState) => {
    const edit = !getState().getData.edit
    dispatch({type: 'EDIT', payload: edit})
}

export const signUp = () => (dispatch, getState) => {
    dispatch({type: 'SIGNUP', payload: true})
}

export const logIn = () => (dispatch, getState) => {
    dispatch({type: 'LOGIN', payload: false})
}