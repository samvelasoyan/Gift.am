import { createStore } from "redux";
import registrationReducer from "./reducers/registrationReducer"

function isLogged(){
const store = createStore(registrationReducer)
let user = store.getState().loggedUser;
store.subscribe(() => user = store.getState().loggedUser)
    if(user.firstName && user.lastName) {
        return true
    }
    else {return false}
}

export default isLogged
