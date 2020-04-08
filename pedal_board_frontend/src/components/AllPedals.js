import React, {Component} from 'react'
import NewPedal from './NewPedal.js'
import Pedal from './Pedal.js'


export default class AllPedals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPedal: false,

    }
    this.toggleNewPedalForm = this.toggleNewPedalForm.bind(this)

  }

  ///////////////////////// Toggle form /////////////////////////////////////
toggleNewPedalForm(){
  this.setState({
    newPedal: !this.state.newPedal
  })
}


/////////////////////////// RENDER ////////////////////////////////////////
  render(){
    return(
      <>
      <div className='pedal-list'>

       {
         this.props.availablePedals.map((pedal, i) =>
         <Pedal
         key={i}
         pedal={pedal}
         deletePedal={this.props.deletePedal}
         toggleUpdatePedalForm={this.toggleUpdatePedalForm}
         updatePedal={this.props.updatePedal}
         availablePedals={this.props.availablePedals}/>
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
