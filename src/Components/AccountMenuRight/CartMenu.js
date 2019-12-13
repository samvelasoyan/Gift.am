import React,{Component,Fragment} from 'react';
import CartProd from '../Products/CartProd';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { descriptionAction } from "../../actions/index";

class CartMenu extends Component{

    render(){
        const { cart,total } = this.props.categories
        return(
            <Fragment>
            <div className='CarttMenuMain'></div>
            <div className='CartMenu' style={{right:`${this.props.right}`}}>
                <div className='CartMenuContent'>
                    <div className='CartMenuHeader'>
                        <div className='CartMenuName'>
                            <div className='CartMenuNameLogo'>
                                <i className="far fa-user"></i>
                            </div>
                            <div className='CartMenuNameAcc'>Cart</div>
                        </div>
                        {total !== 0 ? <div className='total'>${total}</div> : null}
                        <div className='CartMenuClose' onClick={this.props.closeCartMenu}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                </div>
                <div className='CartUserContent'>
                  {cart.map((item, index) => <CartProd {...item} key={index} />)}
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
)(CartMenu);