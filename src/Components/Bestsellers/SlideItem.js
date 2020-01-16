import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToWishListAction, addToCartAction, descriptionAction} from  '../../actions/productsActions';

class SlideItem extends Component{
    render(){
        let name = this.props.name.slice(0,12)
        const {id, category} = this.props
        return(
            <div className={`SlideItem ${this.props.className}`} style={this.props.transition}>
                <div className='slideItemImage' style={this.props.slideItemImage} onClick={()=>this.props.descriptionAction(category, id)}></div>
                <p className='slideItemName'>{name}</p>
                <div className='slideItemPriceHearCart'>
                    <div className='slideItemPrice'>${this.props.price}</div>
                    <div className='slideItemCart' onClick={()=>this.props.addToCartAction(category, id)}>
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className='slideItemHeart' onClick={()=>this.props.addToWishListAction(category,id)}>
                        <i className="fas fa-heart"></i>
                </div>
                </div>
            </div>
        )
    }
}

// export default SlideItem
function mapStateToProps(state) {
    return {
        data: state.getData
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addToCartAction,addToWishListAction,descriptionAction }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SlideItem);