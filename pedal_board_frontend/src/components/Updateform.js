import React, { Component } from 'react'

export default class Updateform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artists: this.props.artists,
      name: this.props.artist.name,
      band: this.props.artist.band,
      image: this.props.artist.image,
      wiki: this.props.artist.wiki,
      pedals: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
  }
  handleChange(e){
  this.setState({[e.target.id]: e.target.value})
}
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

 async handleSubmit(artist){
   try {
     console.log(artist.id);
     let response = await fetch(`http://localhost:8000/api/artist/${artist.id}/`, {
       method: 'PUT',
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
     const foundArtist = this.state.artists.findIndex(foundItem =>
       (foundItem.id === artist.id))
    const copyArtists = [...this.props.artists]
    copyArtists[foundArtist].name = data.name
    copyArtists[foundArtist].band = data.band
    copyArtists[foundArtist].image = data.image
    copyArtists[foundArtist].wiki = data.wiki
    copyArtists[foundArtist].pedals = data.pedals
    this.props.handleUpdate(copyArtists)
    this.props.toggleUpdateForm()
    window.location.reload(false);

   } catch (e) {
     console.error(e)
   }
 }
  render() {
    return(

        <>

        <form id='myform'onSubmit={(e)=>{
        e.preventDefault()
        this.handleSubmit(this.props.artist)
      }}>

          <input type='text' id="name" value={this.state.name} onChange={this.handleChange}/>

          <input type='text' id="band" value={this.state.band} onChange={this.handleChange}/>

          <input type='text' id="image" value={this.state.image} onChange={this.handleChange}/>

          <input type='text' id="wiki" value={this.state.wiki} onChange={this.handleChange}/>


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
