import React, { Component } from 'react'


export default class NewForm extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      band: '',
      image: '',
      wiki: '',
      pedals: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  //////////////////////// Handle changes ///////////////////////////////////
//Text input changes
  handleChange(e){
  this.setState({[e.target.id]: e.target.value})
}
//checkbox changes
handleCheckChange(e){
  let form = document.getElementById('myform');
      let chks = form.querySelectorAll('input[type="checkbox"]');
      let checked = [];
      for(let i = 0; i < chks.length; i++){
          if(chks[i].checked){
              checked.push(chks[i].value)
          }
          this.setState({
            pedals: [...checked]
          })
      }
      console.log(checked);
      return checked;
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
        pedals: this.state.pedals
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

          <input type='text' id="name" placeholder="Name" onChange={this.handleChange}/>

          <input type='text' id="band" placeholder="Band" onChange={this.handleChange}/>

          <input type='text' id="image" placeholder="Image URL" onChange={this.handleChange}/>

          <input type='text' id="wiki" placeholder="Wiki URL" onChange={this.handleChange}/>


          {
            this.props.availablePedals.map((pedal, i) =>
            <div key={i}>
              <label htmlFor={pedal[i]}>{pedal.model}</label>
              <input id={`${pedal[i]}`}type="checkbox" value={pedal.id} onChange={this.handleCheckChange}/>

            </div>
            )
          }



          <input className="form-control btn btn-outline-success" type="submit"/>

        </form>
      </>
    )
  }
}
