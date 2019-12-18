export const setCategoryAction = (text) => (dispatch) => {
    let body = text;
    dispatch({ type: "SET_CATEGORY", payload: body });
};
