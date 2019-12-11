import registrationReducer from "./registrationReducer";
import categoriesReducer from "./categoriesReducer";

const reducer = {
    getData: registrationReducer,
    categories: categoriesReducer,
};

export default reducer;
