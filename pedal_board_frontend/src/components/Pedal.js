import React, { Component } from 'react'

export default class Pedal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showUpdate: false
    }
  }
  render() {
    return(
      <div  className="card pedal" >
        <div>
          <h6>{this.props.pedal.model}</h6>
          <p>{this.props.pedal.brand}</p>
        </div>
        <img className='pedal-image' src={this.props.pedal.image} alt='pedal'/>

        <button className="btn btn-danger"onClick={()=> this.props.deletePedal(this.props.pedal.id)}>DELETE</button>

      </div>
    )
  }
}
