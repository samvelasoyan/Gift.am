import React,{Component} from 'react';

class MainMenuDemo extends Component{
    state={
        display:'none'
    }
    componentDidMount=()=>{
        setTimeout(()=>{
            this.setState({display:'block'})
        },1000)
    }
    render(){
        return(
            <div className='MainMenuDemo' onClick={this.props.show}>
                <div style={{display:`${this.state.display}`}}>Menu</div>   
            </div>
        )
    }
}
export default MainMenuDemo
