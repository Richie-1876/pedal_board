import React, { Component } from 'react';
import Artist from './components/Artist.js'
import Header from './components/Header.js'
import NewForm from './components/NewForm.js'
import AllPedals from './components/AllPedals.js'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8000'
} else {
  baseURL = 'https://pedal-board.herokuapp.com'
}
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artists: [],
      pedals:[],
      showPedals: false,
      availablePedals: [],
      newArtist: false
    }
    this.getArtists = this.getArtists.bind(this)
    this.handleAddArtist = this.handleAddArtist.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.toggleNewForm = this.toggleNewForm.bind(this)
    this.deleteArtist = this.deleteArtist.bind(this)
    this.getPedals = this.getPedals.bind(this)
    this.toggleShowPedals = this.toggleShowPedals.bind(this)
    this.handleAddPedal = this.handleAddPedal.bind(this)
    this.deletePedal = this.deletePedal.bind(this)
    this.updatePedal = this.updatePedal.bind(this)
  }

  ////////////////////// Get requests ///////////////////////////////////////
  //GET ARTISTS
  async getArtists(){
    try {
      let response = await fetch(`${baseURL}/api/artist/`)
      // console.log(response);
      let data = await response.json()
      console.log(data);
      this.setState({
        artists: data
      })

    } catch (e) {
      console.error(e)
    }
  }
  // GET PEDALS
  async getPedals(){
    try {
      let response = await fetch(`${baseURL}/api/pedal/`)
      let data = await response.json()
      console.log(data);
      this.setState({
        availablePedals: data
      })
      console.log(this.state.availablePedals);


    } catch (e) {
      console.error(e)
    }
  }

 ///////////////////// Toggle functions ////////////////////////////////////
// Toggle New Form
toggleNewForm(){
  this.setState({
    newArtist: !this.state.newArtist
  })
}
//toggle show pedal list
toggleShowPedals(){
  this.setState({
    showPedals: !this.state.showPedals
  })
}

///////////////////// Handle adds ///////////////////////////////////////////
// Handle adding a new artist
handleAddArtist(artist){
  console.log(artist);
  const copyArtists = [...this.state.artists, artist]
  this.setState({
    artists: copyArtists

  })
}
// handle add pedal
handleAddPedal(pedal){
  console.log(pedal);
  const copyPedals = [...this.state.availablePedals, pedal]
  this.setState({
    availablePedals: copyPedals
  })
}

//////////////////////////// handle updates ////////////////////////////////
//handle update ARTIST
handleUpdate(artist){
  this.setState({
    artists: artist
  })
 console.log(artist);
}

updatePedal(pedal) {
  this.setState({
    availablePedals: pedal
  })
  console.log(pedal);
}

/////////////////////////// handle delete ///////////////////////////////////
//handle deleting artist
async deleteArtist(id) {
  try {
    let response = await fetch(`${baseURL}/api/artist/${id}/`, {
      method: 'DELETE'
    })
    console.log(response);
    this.setState( prevState => {
      const artists = prevState.artists.filter(artist => artist.id !== id)
      return {artists}
    })
  } catch (e) {
    console.error(e)
  }
}
//delete pedal
async deletePedal(id) {
  try {
    let response = await fetch(`${baseURL}/api/pedal/${id}/`, {
      method: 'DELETE'
    })
    this.setState( prevState => {
      const availablePedals = prevState.availablePedals.filter(pedal => pedal.id !== id)
      return {availablePedals}
    })
  } catch (e) {
    console.error(e)
  }
}

////////////////////////// Component Did Mount //////////////////////////////
//Run on load/before render. Artists and pedals
  componentDidMount(){
    this.getArtists()
    this.getPedals()
  }

//////////////////////// RENDER //////////////////////////////////////////////
  render() {
    return(
      <>
      <Header />
      <button id='add-new'className="btn btn-success"onClick={()=>{this.toggleNewForm()}}>Add new Artist</button>
        {
           this.state.newArtist
           ? <NewForm
           baseURL={baseURL}
           availablePedals={this.state.availablePedals}
           handleAddArtist={this.handleAddArtist} toggleNewForm={this.toggleNewForm}/>
           : null
         }
         <h2 className='all-pedals'onClick={this.toggleShowPedals}>All Pedals</h2>
         {
           this.state.showPedals
           ? <AllPedals
           baseURL={baseURL}
           deletePedal={this.deletePedal}
           handleAddPedal={this.handleAddPedal}
           availablePedals={this.state.availablePedals}
           updatePedal={this.updatePedal}/>
           :null
         }
      <div>
        <div className='artist-container'>
        {
          this.state.artists.map((artist, i) =>
            <Artist
            baseURL={baseURL}
            key={i}
            artist={artist}
            artists={this.state.artists}
            deleteArtist={this.deleteArtist} availablePedals={this.state.availablePedals}
            handleUpdate={this.handleUpdate}/>
          )
        }
        </div>
      </div>
      </>
    )
  }
}
