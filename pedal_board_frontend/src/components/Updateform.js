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
      pedals: this.props.artist.pedals
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
  }

  //////////////////////////// HANDLE CHANGES ////////////////////////////////
//text input changes
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
              checked.push(JSON.parse(chks[i].value))
          }
          this.setState({
            pedals: [...checked]
          })
      }
      console.log(chks);
      console.log(JSON.stringify(checked));
      console.log(checked);
      return checked;
  }


////////////////////////////// HANDLE SUBMIT /////////////////////////////////

 async handleSubmit(artist){
   try {
     console.log(artist.id);
     let response = await fetch(`${this.props.baseURL}/api/artist/${artist.id}/`, {
       method: 'PUT',
       body: JSON.stringify({
         name: this.state.name,
         band: this.state.band,
         image: this.state.image,
         wiki: this.state.wiki,
         pedals: this.state.pedals.map(pedal => pedal.id)
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
    copyArtists[foundArtist].pedals = this.state.pedals
    this.props.handleUpdate(copyArtists)
    this.props.toggleUpdateForm()
    // window.location.reload(false);

   } catch (e) {
     console.error(e)
   }
 }





 //////////////////////////// RENDER /////////////////////////////////////////
  render() {
    return(
        <>
        <form id='myform'onSubmit={(e)=>{
        e.preventDefault()
        this.handleSubmit(this.props.artist)
      }}>

          <input className="form-control form-control-lg" type='text' id="name" value={this.state.name} onChange={this.handleChange}/>

          <input className="form-control form-control-lg" type='text' id="band" value={this.state.band} onChange={this.handleChange}/>

          <input className="form-control form-control-lg" type='text' id="image" value={this.state.image} onChange={this.handleChange}/>

          <input className="form-control form-control-lg" type='text' id="wiki" value={this.state.wiki} onChange={this.handleChange}/>

          <div className='checkboxlist'>
          {
            this.props.availablePedals.map((pedal, i) =>
            <div className="form-check"key={i}>

              <input className="form-check-input"  id={`${pedal}`}type="checkbox" value={JSON.stringify(pedal)} onChange={this.handleCheckChange}/>
                <label class="form-check-label" htmlFor={pedal}>{pedal.model}</label>

            </div>
            )
          }
          </div>



          <input className="form-control btn btn-outline-success" type="submit"/>

        </form>
      </>

    )
  }
}
