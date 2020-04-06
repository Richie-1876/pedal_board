import React, { Component } from 'react';
import Artist from './components/Artist.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artists: [],
      pedals:[]
    }
    this.getArtists = this.getArtists.bind(this)
  }
  async getArtists(){
    try {
      let response = await fetch('http://localhost:8000/api/artist')
      let data = await response.json()
      console.log(data);
      this.setState({
        artists: data
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
      <h1>Hello World</h1>
      <div>
      <Artist />
      {
        this.state.artists.map(artist =>
          <h2>{artist.name}</h2>
        )
      }
      </div>
      </>
    )
  }
}
