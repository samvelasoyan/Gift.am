export const descriptionAction = (category, id) => (dispatch, getState) => {
    const { products } = getState().categories;
    const body = { ...products };
    body[category] = body[category].filter((item) => item.id !== id);
    products[category].map((item) => {
        if (item.id === id) {
            item.description.bool = !item.description.bool;
            return body[category].push(item);
        } else {
            return (item.description.bool = false);
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
            return body.push(item);
        }
        return null;
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
    let body = cart.filter((item) => item.id !== id);
    let newTotal = total;
    cart.map((item) => {
        if (item.id === id) {
            newTotal -= item.price * item.quantity;
        }
        return newTotal;
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
    } else {
        newTotal = total;
    }
    dispatch({ type: "TO_CART", payload: cart, total: newTotal });
};
