import React,{Component,Fragment} from 'react';
import SlideItem from './SlideItem';
// import { watchList } from '../../data/data';

import {
  perfume,
  jewelry,
  watches,
  flowers,
  teddybear,
  beverage,
  cakes,
  hampers,
  balloons,
} from '../../productCreator';

// import ProdPopUp from '../Products/ProdPopUp';

const bests = []
bests.push(
  perfume[0],perfume[1],perfume[2],
  watches[0],watches[1],watches[2],
  flowers[0],flowers[1],flowers[2],
  teddybear[0],teddybear[1],teddybear[2],
  beverage[0],beverage[1],beverage[2],
  cakes[0],cakes[1],cakes[2],
  hampers[0],hampers[1],hampers[2],
  jewelry[0],jewelry[1],jewelry[2],
  balloons[0],balloons[1],balloons[2],
)

class Bestsellers extends Component {

  state={

    changeforLeft:true,

    nextIndex0:0,
    nextIndex1:0,
    nextIndex2:1,
    nextIndex3:2,
    nextIndex4:3,
    nextIndex5:4,
    nextIndex6:5,

    className:{    
      sc0:'s0',
      sc1:'s1',
      sc2:'s2',
      sc3:'s3',
      sc4:'s4',
      sc5:'s5',
      sc6:'s6',
    },

    transition:{
      sc0:'0.25s',
      sc1:'0.25s',
      sc2:'0.25s',
      sc3:'0.25s',
      sc4:'0.25s',
      sc5:'0.25s',
      sc6:'none',
    }
  }
  
  checkIndexRight=()=>{
    if(this.state.className.sc0 === 's0'){
      this.state.nextIndex6 === bests.length-1 ?
      this.setState({nextIndex0:0}) :
      this.setState({nextIndex0:this.state.nextIndex6+1})
    }
    else if(this.state.className.sc1 === 's0'){
      this.state.nextIndex0 === bests.length-1 ?
      this.setState({nextIndex1:0}) :
      this.setState({nextIndex1:this.state.nextIndex0+1})
    }
    else if(this.state.className.sc2 === 's0'){
      this.state.nextIndex1 === bests.length-1 ?
      this.setState({nextIndex2:0}) :
      this.setState({nextIndex2:this.state.nextIndex1+1})
    }
    else if(this.state.className.sc3 === 's0'){
      this.state.nextIndex2 === bests.length-1 ?
      this.setState({nextIndex3:0}) :
      this.setState({nextIndex3:this.state.nextIndex2+1})
    }
    else if(this.state.className.sc4 === 's0'){
      this.state.nextIndex3 === bests.length-1 ?
      this.setState({nextIndex4:0}) :
      this.setState({nextIndex4:this.state.nextIndex3+1})
    }
    else if(this.state.className.sc5 === 's0'){
      this.state.nextIndex4 === bests.length-1 ?
      this.setState({nextIndex5:0}) :
      this.setState({nextIndex5:this.state.nextIndex4+1})
    }
    else if(this.state.className.sc6 === 's0'){ 
      this.state.nextIndex5 === bests.length-1 ?
      this.setState({nextIndex6:0}) :
      this.setState({nextIndex6:this.state.nextIndex5+1})
    }
  }
  right=()=>{
      this.setState({
        transition:{
          sc0:this.changeTransition(this.state.className.sc0,'right'),
          sc1:this.changeTransition(this.state.className.sc1,'right'),
          sc2:this.changeTransition(this.state.className.sc2,'right'),
          sc3:this.changeTransition(this.state.className.sc3,'right'),
          sc4:this.changeTransition(this.state.className.sc4,'right'),
          sc5:this.changeTransition(this.state.className.sc5,'right'),
          sc6:this.changeTransition(this.state.className.sc6,'right'),
      },
        className:{        
          sc0:this.changePosition(this.state.className.sc0,'right'),
          sc1:this.changePosition(this.state.className.sc1,'right'),
          sc2:this.changePosition(this.state.className.sc2,'right'),
          sc3:this.changePosition(this.state.className.sc3,'right'),
          sc4:this.changePosition(this.state.className.sc4,'right'),
          sc5:this.changePosition(this.state.className.sc5,'right'),
          sc6:this.changePosition(this.state.className.sc6,'right'),
        }
      })
    this.checkIndexRight()
  }
  checkIndexLeft=()=>{

    if(this.state.className.sc0 === 's6'){
      this.state.nextIndex1 === 0 ? 
      this.setState({nextIndex0:bests.length-1}) :
      this.setState({nextIndex0:this.state.nextIndex1-1})
    }
    else if(this.state.className.sc1 === 's6'){
      this.state.nextIndex2 === 0 ? 
      this.setState({nextIndex1:bests.length-1}) :
      this.setState({nextIndex1:this.state.nextIndex2-1})
    }
    else if(this.state.className.sc2 === 's6'){
      this.state.nextIndex3 === 0 ? 
      this.setState({nextIndex2:bests.length-1}) :
      this.setState({nextIndex2:this.state.nextIndex3-1})
    }
    else if(this.state.className.sc3 === 's6'){
      this.state.nextIndex4 === 0 ? 
      this.setState({nextIndex3:bests.length-1}) :
      this.setState({nextIndex3:this.state.nextIndex4-1})
    }
    else if(this.state.className.sc4 === 's6'){
      this.state.nextIndex5 === 0 ? 
      this.setState({nextIndex4:bests.length-1}) :
      this.setState({nextIndex4:this.state.nextIndex5-1})
    }
    else if(this.state.className.sc5 === 's6'){
      this.state.nextIndex6 === 0 ? 
      this.setState({nextIndex5:bests.length-1}) :
      this.setState({nextIndex5:this.state.nextIndex6-1})
    }
    else if(this.state.className.sc6 === 's6'){
      this.state.nextIndex0 === 0 ? 
      this.setState({nextIndex6:bests.length-1}) :
      this.setState({nextIndex6:this.state.nextIndex0-1})
    }
  }

  left=()=>{
    if(this.state.changeforLeft){this.setState({changeforLeft:false,nextIndex0:bests.length-1})}
    setTimeout(
      ()=>{
        this.setState({
          transition:{
            sc0:this.changeTransition(this.state.className.sc0,'left'),
            sc1:this.changeTransition(this.state.className.sc1,'left'),
            sc2:this.changeTransition(this.state.className.sc2,'left'),
            sc3:this.changeTransition(this.state.className.sc3,'left'),
            sc4:this.changeTransition(this.state.className.sc4,'left'),
            sc5:this.changeTransition(this.state.className.sc5,'left'),
            sc6:this.changeTransition(this.state.className.sc6,'left'),
          },
          className:{          
            sc0:this.changePosition(this.state.className.sc0,'left'),
            sc1:this.changePosition(this.state.className.sc1,'left'),
            sc2:this.changePosition(this.state.className.sc2,'left'),
            sc3:this.changePosition(this.state.className.sc3,'left'),
            sc4:this.changePosition(this.state.className.sc4,'left'),
            sc5:this.changePosition(this.state.className.sc5,'left'),
            sc6:this.changePosition(this.state.className.sc6,'left'),
           }
        })
      }
    )
  }
  
  changePosition=(str,vector)=>{
    if(vector === 'left'){
      this.checkIndexLeft()
      if(str === 's6'){return 's0'}
      else{return `s${Number(str.replace('s',''))+1}`}
    }
    else{
      if(str === 's0'){return 's6'}
      else{return `s${Number(str.replace('s',''))-1}`}
    }
  }

  changeTransition=(str,vector)=>{
    if(vector === 'left'){
      if(str !== 's6'){return '0.25s'}
      else{return 'none'}
    }
    else{
      if(str !== 's0'){return '0.25s'}
      else{return 'none'}
    }
  }

  render(){
      // console.log(bests[this.state.nextIndex0].image)
    return (
        <Fragment>
        <div id='bestsellers' className='BestsellersSlideHeader'>Bestsellers</div>
        <div className='bestsellersSlide'>
          <div className='bestsellersSlideLeft'><div className='leftFullHeight'onClick={this.left} ><i className="fas fa-chevron-left"></i></div></div>
          <div className='slideContent'>
            <SlideItem
              id={bests[this.state.nextIndex0].id} 
              category={bests[this.state.nextIndex0].category}
              name={bests[this.state.nextIndex0].name} 
              price={bests[this.state.nextIndex0].price} 
              slideItemImage={{ background: `url(${bests[this.state.nextIndex0].image}) center / contain no-repeat`}} 
              className={this.state.className.sc0} 
              transition={{transition:this.state.transition.sc0}}/>
            <SlideItem 
              id={bests[this.state.nextIndex1].id} 
              category={bests[this.state.nextIndex1].category}
              name={bests[this.state.nextIndex1].name} 
              price={bests[this.state.nextIndex1].price} 
              slideItemImage={{ background: `url(${bests[this.state.nextIndex1].image}) center / contain no-repeat`}} 
              className={this.state.className.sc1} 
              transition={{transition:this.state.transition.sc1}}/>
            <SlideItem 
              id={bests[this.state.nextIndex2].id} 
              category={bests[this.state.nextIndex2].category}
              name={bests[this.state.nextIndex2].name} 
              price={bests[this.state.nextIndex2].price} 
              slideItemImage={{ background: `url(${bests[this.state.nextIndex2].image}) center / contain no-repeat`}} 
              className={this.state.className.sc2} 
              transition={{transition:this.state.transition.sc2}}/>
            <SlideItem 
              id={bests[this.state.nextIndex3].id} 
              category={bests[this.state.nextIndex3].category}
              name={bests[this.state.nextIndex3].name} 
              price={bests[this.state.nextIndex3].price} 
              slideItemImage={{ background: `url(${bests[this.state.nextIndex3].image}) center / contain no-repeat`}} 
              className={this.state.className.sc3} 
              transition={{transition:this.state.transition.sc3}}/>
            <SlideItem 
              id={bests[this.state.nextIndex4].id} 
              category={bests[this.state.nextIndex4].category}
              name={bests[this.state.nextIndex4].name} 
              price={bests[this.state.nextIndex4].price} 
              slideItemImage={{ background: `url(${bests[this.state.nextIndex4].image}) center / contain no-repeat`}} 
              className={this.state.className.sc4} 
              transition={{transition:this.state.transition.sc4}}/>
            <SlideItem 
              id={bests[this.state.nextIndex5].id} 
              category={bests[this.state.nextIndex5].category}
              name={bests[this.state.nextIndex5].name} 
              price={bests[this.state.nextIndex5].price} 
              slideItemImage={{ background: `url(${bests[this.state.nextIndex5].image}) center / contain no-repeat`}} 
              className={this.state.className.sc5} 
              transition={{transition:this.state.transition.sc5}}/>
            <SlideItem 
              id={bests[this.state.nextIndex6].id} 
              category={bests[this.state.nextIndex6].category}
              name={bests[this.state.nextIndex6].name} 
              price={bests[this.state.nextIndex6].price} 
              slideItemImage={{ background: `url(${bests[this.state.nextIndex6].image}) center / contain no-repeat`}} 
              className={this.state.className.sc6} 
              transition={{transition:this.state.transition.sc6}}/>
          </div>
          <div className='bestsellersSlideRight'><div className='rightFullHeight' onClick={this.right}><i className="fas fa-chevron-right"></i></div></div>
            {/* {
                bests.map((item, index) => {
                    return item.description.bool ? (
                        <ProdPopUp {...item} key={index} popUp={this.popUp} />
                        )
                        : 
                        null
                    })
            } */}
        </div>
        </Fragment>
    )
  }
}

export default Bestsellers