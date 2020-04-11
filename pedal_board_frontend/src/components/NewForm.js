import React, { Component } from 'react'


export default class NewForm extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      band: '',
      image: '',
      wiki: '',

    }
    this.handleChange = this.handleChange.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)

  }

  //////////////////////// Handle changes ///////////////////////////////////
//Text input changes
  handleChange(e){
  this.setState({[e.target.id]: e.target.value})
}



  ///////////////////////// Handle Submit ///////////////////////////////////

async handleSubmit(e) {
  e.preventDefault()
  try {
    let response = await fetch(`${this.props.baseURL}/api/artist/`, {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        band: this.state.band,
        image: this.state.image,
        wiki: this.state.wiki,

      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let data = await response.json()
    console.log(data);
    this.props.handleAddArtist(data)
    this.props.toggleNewForm()
    this.state = {
      name:'',
      band: '',
      image: '',
      wiki: '',
    }
  } catch (e) {
    console.error(e)
  }
}







/////////////////////////// RENDER /////////////////////////////////////////
  render(){
    return(
      <>

          <form id='myform'onSubmit={this.handleSubmit}>

            <input className="form-control form-control-lg" type='text' id="name" placeholder="Name" onChange={this.handleChange}/>

            <input className="form-control form-control-lg" type='text' id="band" placeholder="Band" onChange={this.handleChange}/>

            <input className="form-control form-control-lg" type='text' id="image" placeholder="Image URL" onChange={this.handleChange}/>

            <input className="form-control form-control-lg" type='text' id="wiki" placeholder="Wiki URL" onChange={this.handleChange}/>


            <input className="form-control btn btn-outline-success" type="submit"/>

          </form>
      </>
    )
  }
}
