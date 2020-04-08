import React, { Component } from 'react';
import Artist from './components/Artist.js'
import Header from './components/Header.js'
import NewForm from './components/NewForm.js'
import AllPedals from './components/AllPedals.js'

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
  }
  //GET ARTISTS

  async getArtists(){
    try {
      let response = await fetch('http://localhost:8000/api/artist')
      let data = await response.json()
      // console.log(data);
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
      let response = await fetch('http://localhost:8000/api/pedal')
      let data = await response.json()
      console.log(data);
      this.setState({
        availablePedals: data
      })

    } catch (e) {
      console.error(e)
    }
  }

  // Toggle New Form
  toggleNewForm(){
  this.setState({
    newArtist: !this.state.newArtist
  })
}

toggleShowPedals(){
  this.setState({
    showPedals: !this.state.showPedals
  })
}
// Handle adding a new artist

handleAddArtist(artist){
  console.log(artist);
  const copyArtists = [...this.state.artists, artist]
  this.setState({
    artists: copyArtists

  })
}

handleAddPedal(pedal){
  console.log(pedal);
  const copyPedals = [...this.state.availablePedals, pedal]
  this.setState({
    availablePedals: copyPedals

  })
}
//handle update ARTISTS
handleUpdate(artist){
  this.setState({

    artists: artist
  })
 console.log(artist);
}

//handle deleting artist
async deleteArtist(id) {
  try {
    let response = await fetch(`http://localhost:8000/api/artist/${id}`, {
      method: 'DELETE'
    })
    this.setState( prevState => {
      const artists = prevState.artists.filter(artist => artist.id !== id)
      return {artists}
    })
  } catch (e) {
    console.error(e)
  }
}

//Run on load/before render.
  componentDidMount(){
    this.getArtists()
    this.getPedals()
  }
  render() {
    return(
      <>
      <Header />
      <button id='add-new'className="btn btn-success"onClick={()=>{this.toggleNewForm()}}>Add new Artist</button>
        {
           this.state.newArtist
           ? <NewForm availablePedals={this.state.availablePedals}handleAddArtist={this.handleAddArtist} toggleNewForm={this.toggleNewForm}/>
           : null
         }
         <h2 onClick={this.toggleShowPedals}>All Pedals</h2>
         {
           this.state.showPedals
           ? <AllPedals handleAddPedal={this.handleAddPedal}availablePedals={this.state.availablePedals} />
           :null
         }
      <div>
        <div className='artist-container'>
        {
          this.state.artists.map((artist, i) =>
            <Artist key={i} artist={artist}
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
