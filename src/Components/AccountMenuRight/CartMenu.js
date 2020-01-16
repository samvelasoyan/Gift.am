import React,{Fragment} from 'react';
import CartProd from '../Products/CartProd';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { descriptionAction } from "../../actions/productsActions";
import {Link} from 'react-router-dom';

function CartMenu (props){
        const { cart,total } = props.categories
        return(
            <Fragment>
                <div className='CartMenuContent'>
                    <div className='CartMenuHeader'>
                        <div className='CartMenuName'>
                            <div className='CartMenuNameLogo'>
                                <i className="far fa-user"></i>
                            </div>
                            <div className='CartMenuNameAcc'>Cart</div>
                        </div>
                        {total !== 0 ? <div className='total'>${total}</div> : null}
                        <div className='CartMenuClose' onClick={props.closeUMenuRight}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                </div>
                <div className='CartUserContent'>
                  {cart.map((item, index) => <CartProd {...item} key={index} />)}
                </div>
                {cart.lenght === 0 ? null : <Link to='/BuyNow' className='buyButton'><button onClick={props.closeUMenuRight}>Buy Now</button></Link>}
            </Fragment>
        )
}

export default connect(
    (state) => {
        return { categories: state.categories };
    },
    (dispatch) => {
        return bindActionCreators({ descriptionAction }, dispatch);
    }
)(CartMenu);