import {
    SIGNUP,
    LOGIN,
    EDIT,
    HIDE_FORM,
    LOGIN_FORM,
    SIGNUP_FORM,
    ERROR,
    LOGGEDUSER
} from "../Constants";
import axios from "axios";

export const signUp = (data) => (dispatch) => {
    axios.post("http://192.168.5.69:8003/api/Users/Register", data).then((res) => {
        console.log(res.data, "data");
        if (res.status === 200) {
            localStorage.setItem(`${res.data.email}Token`, res.data.token);
            dispatch({
                type: LOGGEDUSER,
                payload: res.data
            });
        } else {
            dispatch({
                type: ERROR
            });
        }
    });
};

export const logIn = (data) => (dispatch, getState) => {
    const body = { ...data };
    axios
        .post("http://192.168.5.69:8003/api/Users/Login", body, {
            "Content-Type": "application/json"
        })
        .then((res) => {
            console.log(res.data);
            if (res.status === 200) {
                dispatch({
                    type: LOGGEDUSER,
                    payload: res.data
                });
                localStorage.setItem("guestMode", "off");
                const template = !getState().getData.template;
                dispatch({ type: EDIT, payload: template });
            } else {
                dispatch({
                    type: ERROR,
                    payload: true
                });
            }
        });
};

export const logOut = () => (dispatch) => {
    dispatch({
        type: LOGGEDUSER,
        payload: {}
    });
    localStorage.setItem("guestMode", "on");
};

export const errorAction = () => (dispatch) => {
    dispatch({ type: ERROR, payload: false });
};
// export const logIn = (obj) => (dispatch) => {
//     //let data = { ...obj };
//     //let token= localStorage.getItem([`${obj.Email}Token`]) ;
//     axios
//         .post(
//             "http://192.168.5.69:8003/api/Users/Login",
//             {
//                 Controller: "product",
//                 Method: "addProduct",
//                 RequestData: JSON.stringify({
//                     // stegh datan
//                 })
//             },
//             {
//                 "Content-Type": "application/json",
//                 authorize: localStorage.getItem([`${obj.Email}Token`])
//             }
//         )
//         .then((res) => {
//             console.log(res.data);
//             if (res.status === 200) {
//                 dispatch({
//                     type: LOGIN,
//                     payload: res.data
//                 });
//             }
//         });
// };

export const popUpAction = () => (dispatch, getState) => {
    const template = !getState().getData.template;
    dispatch({ type: EDIT, payload: template });
};

export const enterSignUpAction = () => (dispatch) => {
    dispatch({ type: SIGNUP, payload: true });
    dispatch({ type: LOGIN, payload: false });
};

export const enterLogInAction = () => (dispatch) => {
    dispatch({ type: SIGNUP, payload: false });
    dispatch({ type: LOGIN, payload: true });
};

export const signUpAction = () => (dispatch, getState) => {
    dispatch({ type: SIGNUP, payload: !getState().getData.signUp });
};

export const logInAction = () => (dispatch, getState) => {
    dispatch({ type: LOGIN, payload: !getState().getData.logIn });
};

export const hideFormAction = () => (dispatch, getState) => {
    dispatch({ type: HIDE_FORM, payload: !getState().getData.formBool });
};

export const hideLogInAction = () => (dispatch) => {
    dispatch({ type: LOGIN_FORM, payload: false });
};

export const hideSignUpAction = () => (dispatch) => {
    dispatch({ type: SIGNUP_FORM, payload: true });
};
