import React,{useState} from 'react';
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchAction } from "../../../actions/index";

function HeaderSearch ({searchAction}){
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value)
    } 
    const handleSubmit = (e,value) => {
        e.preventDefault();
        searchAction(value)
    }
        return(
        <div className='HeaderSearch'>
            <form onSubmit={(e)=>handleSubmit(e, value)}>
                <input type='search' className='HeaderSearchInput' onChange={handleChange} value={value}></input>
                <button className='HeaderSearchButton'>
                    <Link to={`/search/${value}`}>
                        <i className="fas fa-search"></i>
                    </Link>
                </button>
            </form>
        </div>
    )
};

export default connect(
    (state) => {
        return { categories: state.categories, data: state.getData };
    },
    (dispatch) => {
        return bindActionCreators({ searchAction }, dispatch);
    }
)(HeaderSearch);