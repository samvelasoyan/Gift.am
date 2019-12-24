export const setCategoryAction = (text) => (dispatch) => {
    let body = text;
    localStorage.setItem('category', text)
    dispatch({ type: "SET_CATEGORY", payload: body });
};
