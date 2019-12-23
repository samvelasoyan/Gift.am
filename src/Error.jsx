import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { errorAction } from './actions/loginRegisterActions';

function Error({errorAction}) {
    return (
        <div id="Error">
            <div className="error">
                <div className="circle">
                    <span className='error-logo'>
                        <i className="fas fa-times"></i>
                    </span>
                </div>
                <div className="error-text">
                    <h1>Sorry!</h1>
                    <p>Something went wrong. Please go back and try again later!</p>
                    <button onClick={errorAction}>OK</button>
                </div>
            </div>
        </div>
    );
}

export default connect(
    state => {
        return {error: state.getData.error}
    },
    dispatch => bindActionCreators({errorAction}, dispatch)
)(Error);