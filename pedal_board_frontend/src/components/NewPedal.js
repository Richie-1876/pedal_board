import React, { Component } from 'react'

export default class NewPedal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      model: '',
      band: '',
      image: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
  this.setState({[e.target.id]: e.target.value})
}
async handleSubmit(e) {
  e.preventDefault()
  try {
    let response = await fetch('http://localhost:8000/api/pedal/', {
      method: "POST",
      body: JSON.stringify({
        model: this.state.model,
        brand: this.state.brand,
        image: this.state.image,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let data = await response.json()
    console.log(data);
    this.props.handleAddPedal(data)
    this.props.toggleNewPedalForm()
    this.state = {
      model:'',
      brand: '',
      image: '',
    }
  } catch (e) {
    console.error(e)
  }
}
  render() {
    return(
      <form id='pedalform'onSubmit={this.handleSubmit}>

        <input type='text' id="model" placeholder="Model" onChange={this.handleChange}/>

        <input type='text' id="brand" placeholder="Brand" onChange={this.handleChange}/>

        <input type='text' id="image" placeholder="Image URL" onChange={this.handleChange}/>
<input className="form-control btn btn-outline-success" type="submit"/>

      </form>
    )
  }
}
