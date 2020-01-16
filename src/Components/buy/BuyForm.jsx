import React,{Component,Fragment} from 'react';
import './buy.css'

class BuyForm extends Component{
    render(){
        return(
            <Fragment>
                <div className="row">
                    <div className="col-75">
                        <div className="container">
                        <form>
                        
                            <div className="row">
                            <div className="col-50">
                                <h3>Billing Address</h3>
                                <label className='buyLabel' htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                                <input className='buyInput' type="text" id="fname" name="firstname" placeholder="Name"></input>
                                <label className='buyLabel' htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                                <input className='buyInput' type="text" id="email" name="email" placeholder="giftam@mail.com"></input>
                                <label className='buyLabel' htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                <input className='buyInput' type="text" id="adr" name="address" placeholder="1 Alek Manukyan St, Yerevan"></input>
                                <label className='buyLabel' htmlFor="city"><i className="fa fa-institution"></i> City</label>
                                <input className='buyInput' type="text" id="city" name="city" placeholder="Yerevan"></input>

                                <div className="row">
                                <div className="col-50">
                                    <label className='buyLabel' htmlFor="state">State</label>
                                    <input className='buyInput' type="text" id="state" name="state" placeholder="NY"></input>
                                </div>
                                <div className="col-50">
                                    <label className='buyLabel' htmlFor="zip">Zip</label>
                                    <input className='buyInput' type="text" id="zip" name="zip" placeholder="10001"></input>
                                </div>
                                </div>
                            </div>

                            <div className="col-50">
                                <h3>Payment</h3>
                                <label className='buyLabel' htmlFor="fname">Accepted Cards</label>
                                <div className="icon-container">
                                <i className="fa fa-cc-visa" style={{color:"navy",marginLeft:"0"}}></i>
                                <i className="fa fa-cc-amex" style={{color:"blue"}}></i>
                                <i className="fa fa-cc-mastercard" style={{color:"red"}}></i>
                                <i className="fa fa-cc-discover" style={{color:"orange"}}></i>
                                </div>
                                <label className='buyLabel' htmlFor="cname">Name on Card</label>
                                <input className='buyInput' type="text" id="cname" name="cardname" placeholder="Name"></input>
                                <label className='buyLabel' htmlFor="ccnum">Credit card number</label>
                                <input className='buyInput' type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
                                <label className='buyLabel' htmlFor="expmonth">Exp Month</label>
                                <input className='buyInput' type="text" id="expmonth" name="expmonth" placeholder="September"></input>
                                <div className="row">
                                <div className="col-50">
                                    <label className='buyLabel' htmlFor="expyear">Exp Year</label>
                                    <input className='buyInput' type="text" id="expyear" name="expyear" placeholder="2019"></input>
                                </div>
                                <div className="col-50">
                                    <label className='buyLabel' htmlFor="cvv">CVV</label>
                                    <input className='buyInput' type="text" id="cvv" name="cvv" placeholder="352"></input>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                            <label  className='buyLabel'>
                            
                            <input type="checkbox" defaultChecked="checked" name="sameadr"></input>
                            Shipping address same as billing
                            </label>
                            <input type="submit" value="Continue to checkout" className="btn"></input>
                        </form>
                        </div>
                    </div>
                   
                    </div>
            </Fragment>)
        
    }
}

export default BuyForm;