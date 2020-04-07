import React, { Component } from 'react'
import Updateform from './Updateform.js'

export default class Artist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artistsPedals: [],
      toggleShowPedals: false,
      showUpdate: false
    }
    this.getArtistsPedals = this.getArtistsPedals.bind(this)
    this.toggleShow = this.toggleShow.bind(this)
    this.toggleUpdateForm = this.toggleUpdateForm.bind(this)
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
  toggleShow(){
    this.setState({toggleShowPedals: !this.state.toggleShowPedals})
  }
  toggleUpdateForm(){
  this.setState({
    showUpdate: !this.state.showUpdate
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
        <h3 onClick={()=>this.toggleShow()}>
        {
          this.state.toggleShowPedals ? "Hide Pedal Board" : "Show Pedal Board"
        }
        </h3>

        {
          this.state.toggleShowPedals ?
          <ul>
          {
            this.state.artistsPedals.map((pedal, i) =>
              <div className="pedal-container" key={i}>
              <h3>Model: {pedal.model}</h3>
              <h4>Brand: {pedal.brand}</h4>
              <img src={pedal.image} alt='pedal'/>

              </div>
            )

          }
          </ul>
          : null
        }
        <button className="btn btn-warning"onClick={()=>{this.toggleUpdateForm()}}>UPDATE</button>
        <button className="btn btn-danger"onClick={()=> this.props.deleteArtist(this.props.artist.id)}>DELETE</button>
        {
                 this.state.showUpdate
                 ? <Updateform toggleUpdateForm={this.toggleUpdateForm}
                 artist={this.props.artist}
                 handleUpdate={this.props.handleUpdate}
                 artists={this.props.artists}
                 artistsPedals={this.state.artistsPedals}/>
                 : null
        }
      </div>

      </>
    )
  }
}
