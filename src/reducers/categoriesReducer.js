import { DESCRIPTION } from "../Constants";
import { perfume } from "../productCreator";

const ACTION_HANDLERS = {
    [DESCRIPTION]: (state, action) => {
        return { ...state, products: action.payload };
    }
};

const initState = {
    products: {perfume},
    PopUp: false
};

const categoriesReducer = (state = initState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};

export default categoriesReducer;