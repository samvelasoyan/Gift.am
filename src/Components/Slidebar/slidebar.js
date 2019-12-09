import React,{Component,Fragment} from 'react';
import Text from './text';
import img1 from '../../images/slideshow/img1.jpg';
import img2 from '../../images/slideshow/img2.jpg';
import img3 from '../../images/slideshow/img3.jpg';
// import img4 from '../../images/slideshow/img4.jpg';

const imgarr = [img1,img2,img3]
const slidearr = [
  {
    // image:img1,
    text:`Let Gift.am work it's magic to create the perfect gift for your budget`
  },
  {
    // image:img2,
    text:'Make your loved ones feel that you care about them'
  },
  {
    // image:img3,
    text:'Buy gift for beloved one'
  },
]
class App extends Component{
  state={
    left:'-100%',
    center:'0%',
    right:'100%',
    transition:false,
    curIndex:0
  }

  curimg=(position)=>{
    if(position === 'left'){
      return imgarr[this.state.curIndex === 0 ? imgarr.length-1 : this.state.curIndex-1]
    }
    else if(position === 'center'){
      return imgarr[this.state.curIndex]
    }
    else{
      return imgarr[this.state.curIndex === imgarr.length-1 ? 0 : this.state.curIndex+1]
    }
  }
  curtext=(position)=>{
    if(position === 'left'){
      return slidearr[this.state.curIndex === 0 ? slidearr.length-1 : this.state.curIndex-1].text
    }
    else if(position === 'center'){
      return slidearr[this.state.curIndex].text
    }
    else{
      return slidearr[this.state.curIndex === slidearr.length-1 ? 0 : this.state.curIndex+1].text
    }
  }
  componentDidMount(){
    this.autoSlide = setInterval(()=>{
      if(this.state.transition === false){
        this.setState({
          left:'-200%',
          center:'-100%',
          right:'0%',
          transition:true})
  
        setTimeout(() => {
          this.setState({
            left:'-100%',
            center:'0%',
            right:'100%',
            curIndex: this.state.curIndex === imgarr.length-1 ? 0 : this.state.curIndex+1,
            transition:!this.state.transition})
        }, 1000)
      }
    },2500)
  }
  slideLeft=()=>{
    clearInterval(this.autoSlide)
    if(this.state.transition === false){
      this.setState({
        left:'0%',
        center:'100%',
        right:'200%',
        transition:true})

      setTimeout(() => {
        this.setState({
          left:'-100%',
          center:'0%',
          right:'100%',
          curIndex: this.state.curIndex === 0 ? imgarr.length-1 : this.state.curIndex-1,
          transition:!this.state.transition})
      }, 1000);
    }
  }

  slideRight=()=>{
    clearInterval(this.autoSlide)
    if(this.state.transition === false){
      this.setState({
        left:'-200%',
        center:'-100%',
        right:'0%',
        transition:true})

      setTimeout(() => {
        this.setState({
          left:'-100%',
          center:'0%',
          right:'100%',
          curIndex: this.state.curIndex === imgarr.length-1 ? 0 : this.state.curIndex+1,
          transition:!this.state.transition})
      }, 1000);
    }
  }

  render(){
    const tr = this.state.transition ? '1s' : '0s'
    return(
      <Fragment>
          <div className='slide'>
          <div className='leftbtn' onClick={this.slideLeft}><i className="fas fa-chevron-left"></i></div>
            <div className='slideimg imgleft' style={{left:this.state.left,transition:tr}}>        
              {/* <img src={this.curimg('left')} alt='image' ></img> */}
              <div className='image' style={{backgroundImage: `url(${this.curimg('left')})`,backgroundSize:'100% 100%'}}>
                <Text text={`${this.curtext('left')}`}/>
              </div>
            </div>
            <div className='slideimg imgcenter' style={{left:this.state.center,transition:tr}}>        
              {/* <img src={this.curimg('center')} alt='image' ></img> */}
              <div className='image' style={{backgroundImage: `url(${this.curimg('center')})`,backgroundSize:'100% 100%' }}>
                <Text text={`${this.curtext('center')}`}/>
              </div>
            </div>
            <div className='slideimg imgright' style={{left:this.state.right,transition:tr}}>        
              {/* <img src={this.curimg('right')} alt='image'></img> */}
              <div className='image' style={{backgroundImage: `url(${this.curimg('right')})`,backgroundSize:'100% 100%'}}>
                <Text text={`${this.curtext('right')}`}/>
              </div>
            </div>
            <div className='rightbtn' onClick={this.slideRight}><i className="fas fa-chevron-right"></i></div>
          </div>
      </Fragment>
    )
  }
}
export default App