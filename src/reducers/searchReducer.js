import { SEARCH } from "../Constants";
import { perfume, watches, flowers } from "../productCreator";

const ACTION_HANDLERS = {
    [SEARCH]: (state, action) => {
        return { ...state, searchItems: action.payload, value: action.value };
    },
};

const initState = {
    products: [...perfume, ...watches, ...flowers],
    searchItems: [],
    value: ''
}

const searchReducer = (state = initState, action) => {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state,action) : state 
}

export default searchReducer;