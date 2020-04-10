import React, { Component } from 'react'
import UpdatePedal from './UpdatePedal.js'

export default class Pedal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showUpdatePedal: false
    }
    this.toggleUpdatePedalForm = this.toggleUpdatePedalForm.bind(this)
  }

  toggleUpdatePedalForm(){
    this.setState({
      showUpdatePedal: !this.state.showUpdatePedal
    })
  }

  render() {
    return(
      <div  className="card pedal" >
        <div>
          <h6 className="card-header">{this.props.pedal.model}</h6>
        </div>
        <img className='pedal-image' src={this.props.pedal.image} alt='pedal'/>

        <div className="button-group">
        <button className="btn btn-warning"onClick={()=>{this.toggleUpdatePedalForm()}}>UPDATE</button>

        <button className="btn btn-danger"onClick={()=> this.props.deletePedal(this.props.pedal.id)}>DELETE</button>
        </div>
        {
          this.state.showUpdatePedal
          ? <UpdatePedal
          baseURL={this.props.baseURL}
          pedal={this.props.pedal} toggleUpdatePedalForm={this.toggleUpdatePedalForm}
          availablePedals={this.props.availablePedals}
          updatePedal={this.props.updatePedal}/>
          : null
        }


      </div>
    )
  }
}
