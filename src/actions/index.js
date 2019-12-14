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
    body[category] = body[category].filter((item) => item.id !== id);
    products[category].map((item) => {
        if (item.id === id) {
            item.description.bool = !item.description.bool;
            body[category].push(item);
        } else {
            item.description.bool = false;
        }
    });
    body[category].sort((a, b) => a.price - b.price);
    dispatch({ type: "DESCRIPTION", payload: body });
};

export const addToWishListAction = (category, id) => (dispatch, getState) => {
    const { products, list } = getState().categories;
    const body = list.filter((item) => item.id !== id);
    products[category].map((item) => {
        if (item.id === id) {
            body.push(item);
        }
    });
    dispatch({ type: "TO_LIST", payload: body });
};

export const removeFromWishListAction = (id) => (dispatch, getState) => {
    const { list } = getState().categories;
    const body = list.filter((item) => item.id !== id);
    dispatch({ type: "TO_LIST", payload: body });
};

export const addToCartAction = (category, id) => (dispatch, getState) => {
    const { total, products, cart } = getState().categories;
    let body = [...cart];
    const newItem = products[category].find((item) => item.id === id);
    const existingItem = body.find((item) => item.id === id);
    if (existingItem) {
        newItem.quantity += 1;
    } else {
        newItem.quantity = 1;
        body = [...cart, newItem];
    }
    let newTotal = total + newItem.price;
    dispatch({ type: "TO_CART", payload: body, total: newTotal });
};

export const removeFromCartAction = (id) => (dispatch, getState) => {
    const { total, cart } = getState().categories;
    let body = cart.filter(item => item.id !== id);
    let newTotal = total;
    cart.map((item) => {
        if (item.id === id) {
            newTotal -= item.price * item.quantity;
        }
        return newTotal
    });

    dispatch({ type: "TO_CART", payload: body, total: newTotal });
};

export const addQuantityAction = (id) => (dispatch, getState) => {
    const { total, cart } = getState().categories;
    const item = cart.find((item) => item.id === id);
    item.quantity += 1;
    let newTotal = total + item.price;
    dispatch({ type: "TO_CART", payload: cart, total: newTotal });
};

export const subQuantityAction = (id) => (dispatch, getState) => {
    const { total, cart } = getState().categories;
    const item = cart.find((item) => item.id === id);
    let newTotal = 0;
    if (item.quantity > 1) {
        item.quantity -= 1;
        newTotal = total - item.price;
    }
    dispatch({ type: "TO_CART", payload: cart, total: newTotal });
};

//Routing actions

export const setCategoryAction = (text) => (dispatch) => {
    let body = text;
    dispatch({ type: "SET_CATEGORY", payload: body });
};
