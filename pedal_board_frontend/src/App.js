import React, { Component } from 'react';
import Artist from './components/Artist.js'
import Header from './components/Header.js'
import NewForm from './components/NewForm.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artists: [],
      pedals:[],
      newArtist: false
    }
    this.getArtists = this.getArtists.bind(this)
    this.handleAddArtist = this.handleAddArtist.bind(this)
    this.toggleNewForm = this.toggleNewForm.bind(this)
    this.deleteArtist = this.deleteArtist.bind(this)
  }
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
  toggleNewForm(){
  this.setState({
    newArtist: !this.state.newArtist
  })
}
handleAddArtist(artist){
  console.log(artist);
  const copyArtists = [artist, ...this.state.artists]
  this.setState({
    artists: copyArtists

  })
}
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
  componentDidMount(){
    this.getArtists()
  }
  render() {
    return(
      <>
      <Header />
      <button className="btn btn-success"onClick={()=>{this.toggleNewForm()}}>Add new Artist</button>
        {
           this.state.newArtist
           ? <NewForm handleAddArtist={this.handleAddArtist} toggleNewForm={this.toggleNewForm}/>
           : null
         }
      <div>

      {
        this.state.artists.map((artist, i) =>
          <Artist key={i} artist={artist} deleteArtist={this.deleteArtist}/>
        )
      }
      </div>
      </>
    )
  }
}
