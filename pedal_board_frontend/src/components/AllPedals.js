import React, {Component} from 'react'
import NewPedal from './NewPedal.js'

export default class AllPedals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPedal: false
    }
    this.toggleNewPedalForm = this.toggleNewPedalForm.bind(this)
  }
  toggleNewPedalForm(){
  this.setState({
    newPedal: !this.state.newPedal
  })
}
  render(){
    return(
      <>
      <div className='pedal-list'>

       {
         this.props.availablePedals.map((pedal, i) =>
         <div key={i} className="card pedal" >
           <div>
             <h6>Model: {pedal.model}</h6>
             <p>Brand: {pedal.brand}</p>
           </div>
           <img className='pedal-image' src={pedal.image} alt='pedal'/>



         </div>
        )
       }

      </div>
      <button id='add-new'className="btn btn-success"onClick={()=>{this.toggleNewPedalForm()}}>Add new Pedal</button>
      {
        this.state.newPedal ?
        <NewPedal handleAddPedal={this.props.handleAddPedal} toggleNewPedalForm={this.toggleNewPedalForm} />
        : null
      }
      </>
    )
  }
}
