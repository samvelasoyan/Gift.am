import registrationReducer from "./registrationReducer";
import categoriesReducer from "./categoriesReducer";
import searchReducer from "./searchReducer";

const reducer = {
    getData: registrationReducer,
    categories: categoriesReducer,
    search: searchReducer,
};

export default reducer;
