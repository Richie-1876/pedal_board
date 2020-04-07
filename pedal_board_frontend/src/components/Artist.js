import React, { Component } from 'react'

export default class Artist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artistsPedals: []
    }
    this.getArtistsPedals = this.getArtistsPedals.bind(this)
  }
  getArtistsPedals(){
    let pedalTemp = []
    let pedals = this.props.artist.pedals
    for (let i = 0; i < pedals.length; i++) {
      this.props.availablePedals.map(pedal => {
      if (pedal.id === pedals[i]) {

        pedalTemp.push(pedal)
      }
      })
    }
    this.setState({
      artistsPedals: [...pedalTemp]
    })


  }
  componentDidMount(){
    this.getArtistsPedals()
  }
  render () {
    return(
      <>
      <div className="artist-container">
        <img src={this.props.artist.image} alt="artist"/>
        <h2>{this.props.artist.name}</h2>
        <h3>Band: {this.props.artist.band}</h3>
        <a href={this.props.artist.wiki} target='_blank'rel="noopener noreferrer">More Info</a>
        <h3>Pedal Board</h3>
        <ul>
        {
          this.state.artistsPedals.map((pedal, i) =>
            <div className="pedal-container" key={i}>
            <h3>{pedal.model}</h3>
            <h4>{pedal.brand}</h4>
            <img src={pedal.image} alt='pedal'/>

            </div>
          )

        }
        </ul>
        <button className="btn btn-danger"onClick={()=> this.props.deleteArtist(this.props.artist.id)}>DELETE</button>
      </div>

      </>
    )
  }
}
