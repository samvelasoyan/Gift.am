import React,{Component} from 'react';
import Icon from './Icon'

class Search extends Component{
    state = {
        inputValue: ''
    }

    handleChange = (e) => {
        this.setState({inputValue: e.target.value})
    }

    render(){
        const bool = (this.state.inputValue === '')
        const {animation, showSearchBar} = this.props
        return(
            <div className='search' id='#Search' style={!animation? {transform: 'translateY(0%)'}:{transform: 'translateY(200%)'}}>
                <form>
                    <input type='search' className='searchInput' value={this.state.inputValue} onChange={this.handleChange}></input>
                    <button className='searchButton' onClick={showSearchBar}>
                        <Icon icon="fas fa-search" title={bool? 'close' : 'search'}/>
                    </button>
                </form>
            </div>
        )
    }
}
export default Search
