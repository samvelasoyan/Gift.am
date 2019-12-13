import React,{Component,Fragment} from 'react';
import ListProd from '../Products/ListProd';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { descriptionAction } from "../../actions/index";

class WishListMenu extends Component{
    render(){
        const { list } = this.props.categories
        return(
            <Fragment>
            <div className='WishListMenuMain'></div>
            <div className='WishListMenu' style={{right:`${this.props.right}`}}>
                <div className='WishListMenuContent'>
                    <div className='WishListMenuHeader'>
                        <div className='WishListMenuName'>
                            <div className='WishListMenuNameLogo'>
                                <i className="far fa-user"></i>
                            </div>
                            <div className='WishListMenuNameAcc'>Wish List</div>
                        </div>
                        <div className='WishListMenuClose' onClick={this.props.closeWishListMenu}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                </div>
                <div className='WishListUserContent'>
                    {list.map((item, index) => <ListProd {...item} key={index} />)}
                </div>
            </div>
            </Fragment>
        )
    }
}

export default connect(
    (state) => {
        return { categories: state.categories };
    },
    (dispatch) => {
        return bindActionCreators({ descriptionAction }, dispatch);
    }
)(WishListMenu);
