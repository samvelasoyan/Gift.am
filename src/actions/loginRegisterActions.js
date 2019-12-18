import { SIGNUP, LOGIN } from "../Constants";
import axios from "axios";

export const signUp = (data) => (dispatch) => {
    axios.post("http://192.168.5.69:8003/api/Users/Register", data).then((res) => {
        console.log(res.data, "dataaaaaa");
        if (res.status === 200) {
            localStorage.setItem(`${res.data.email}Token`, res.data.token);
            dispatch({
                type: SIGNUP,
                payload: res.data
            });
        }
    });
};

export const logIn = (obj) => (dispatch) => {
    let data = { ...obj, token: localStorage.getItem(`${obj.email}Token`) };
    axios.post("http://192.168.5.69:8003/api/Users/Login", data).then((res) => {
        console.log(res.data);
        if (res.status === 200) {
            dispatch({
                type: LOGIN,
                payload: res.data
            })
        }
    });
};


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