import React,{useState, createRef} from 'react';
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchAction } from "../../../actions/searchActions";

function HeaderSearch ({searchAction, loop}){
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value)
    } 
    let buttonRef = createRef();
    const handleSubmit = (e,value) => {
        e.preventDefault();
        searchAction(value);
        buttonRef.current.click();
        loop && setTimeout(()=>loop(), 100)
    }
        return(
        <div className='HeaderSearch'>
            <form onSubmit={(e)=>handleSubmit(e, value)}>
                <input type='search' className='HeaderSearchInput' onChange={handleChange} value={value}></input>
                <button className='HeaderSearchButton' >
                    <Link to={`/search`} ref={buttonRef}>
                        <i className="fas fa-search"></i>
                    </Link>
                </button>
            </form>
        </div>
    )
};

export default connect(
    (state) => {
        return { categories: state.categories, data: state.getData, search: state.search.searchItems };
    },
    (dispatch) => {
        return bindActionCreators({ searchAction }, dispatch);
    }
)(HeaderSearch);