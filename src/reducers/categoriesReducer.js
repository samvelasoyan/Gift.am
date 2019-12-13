import { DESCRIPTION, CATEGORY, TOCART, TOLIST } from "../Constants";
import { perfume, watches, flowers } from "../productCreator";

const ACTION_HANDLERS = {
    [DESCRIPTION]: (state, action) => {
        return { ...state, products: action.payload };
    },
    [CATEGORY]: (state, action) => {
        return { ...state, category: action.payload };
    },
    [TOCART]: (state, action) => {
        return { ...state, cart: action.payload , total: action.total};
    },
    [TOLIST]: (state, action) => {
        return { ...state, list: action.payload}
    } 
};

const initState = {
    products: {perfume, watches, flowers,},
    list: [],
    cart: [],
    total: 0,
    category: ''
};

const categoriesReducer = (state = initState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};

export default categoriesReducer;