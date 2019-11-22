import React,{Component} from 'react';

class Search extends Component{
    render(){
        return(
            <div className='search'>
                <form>
                    <input type='search' className='searchInput'></input>
                    <button className='searchButton'>
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        )
    }
}
export default Search
