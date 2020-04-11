import React, { Component } from 'react'

export default class UpdatePedal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pedals: this.props.availablePedals,
      model: this.props.pedal.model,
      brand: this.props.pedal.brand,
      image: this.props.pedal.image
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
  this.setState({[e.target.id]: e.target.value})
}
async handleSubmit(pedal) {
  console.log(pedal);
  try {
    let response = await fetch(`${this.props.baseURL}/api/pedal/${pedal.id}/`, {
      method: 'PUT',
      body: JSON.stringify({
        model: this.state.model,
        brand: this.state.brand,
        image: this.state.image
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let data = await response.json()
    console.log(data);
    const foundPedal = this.state.pedals.findIndex(foundItem => (foundItem.id === pedal.id))
    const copyPedals = [...this.state.pedals]
    copyPedals[foundPedal].model = data.model
    copyPedals[foundPedal].brand = data.brand
    copyPedals[foundPedal].image = data.image
    this.props.updatePedal(copyPedals)
    console.log(copyPedals);
    this.props.toggleUpdatePedalForm()
  } catch (e) {
    console.error(e)
  }
}
  render() {
    return(
      <>

        <form id='pedalUpdateform'onSubmit={(e)=>{
        e.preventDefault()
        this.handleSubmit(this.props.pedal)}}>

          <input className="form-control form-control-lg"type='text' id="model" value={this.state.model} onChange={this.handleChange}/>

          <input className="form-control form-control-lg" type='text' id="brand" value={this.state.brand} onChange={this.handleChange}/>

          <input className="form-control form-control-lg"type='text' id="image" value={this.state.image} onChange={this.handleChange}/>

          <input className="form-control btn btn-outline-success" type="submit"/>

        </form>

      </>
    )
  }
}
