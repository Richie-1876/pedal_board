import React, { Component } from 'react'
import Updateform from './Updateform.js'

export default class Artist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: this.props.artist,
      artistsPedals: [],
      toggleShowPedals: false,
      showUpdate: false
    }
    this.getArtistsPedals = this.getArtistsPedals.bind(this)
    this.toggleShow = this.toggleShow.bind(this)
    this.toggleUpdateForm = this.toggleUpdateForm.bind(this)
  }


///////////////////////// Function to get associated pedals ////////////////
//Get associated pedals
  getArtistsPedals(){
    let pedalTemp = []
    let pedals = this.props.artist.pedals
    for (let i = 0; i < pedals.length; i++) {
      this.props.availablePedals.map(pedal => {
      if (pedal.id === pedals[i]) {

        pedalTemp.push(pedal)
      }
      })
      // console.log(pedalTemp);
    }
    this.setState({
      artistsPedals: [...pedalTemp]
    })
  }

//////////////////////// Toggle functions ///////////////////////////////////
//toggle show associated pedals
  toggleShow(){
    this.setState({toggleShowPedals: !this.state.toggleShowPedals})
  }
// toggle update artist form
  toggleUpdateForm(){
  this.setState({
    showUpdate: !this.state.showUpdate
  })
}

/////////////////////// Component Did Mount /////////////////////////////////
  componentDidMount(){
    this.getArtistsPedals()
  }



/////////////////////// RENDER ///////////////////////////////////////////////
  render () {
    return(
      <>
      <div className="card">
        <img className="card-img-top"src={this.props.artist.image} alt="artist"/>
        <h2 className="card-header">{this.props.artist.name}</h2>
        <h3>{this.props.artist.band}</h3>
        <a href={this.props.artist.wiki} target='_blank'rel="noopener noreferrer">More Info</a>
        <h3 className='show-hide'onClick={()=>this.toggleShow()}>
        {
          this.state.toggleShowPedals ? "Hide Pedal Board" : "Show Pedal Board"
        }
        </h3>

        {
          this.state.toggleShowPedals ?
          <div className='pedal-group'>
          {

            this.state.artist.pedals.map((pedal) =>

              <div className="pedal-container" >
                <div>
                  <h5>Model: {pedal.model}</h5>
                  <h6>Brand: {pedal.brand}</h6>
                </div>
                <img className='pedal-image' src={pedal.image} alt='pedal'/>

              </div>
            )

          }
          </div>
          : null
        }
        <div className="button-group">
        <button className="btn btn-warning"onClick={()=>{this.toggleUpdateForm()}}>UPDATE</button>
        <button className="btn btn-danger"onClick={()=> this.props.deleteArtist(this.props.artist.id)}>DELETE</button>
        </div>
        {
                 this.state.showUpdate
                 ? <Updateform
                 baseURL={this.props.baseURL}
                  toggleUpdateForm={this.toggleUpdateForm}
                 artist={this.props.artist}
                 handleUpdate={this.props.handleUpdate}
                 artists={this.props.artists}
                 artistsPedals={this.state.artistsPedals}
                 availablePedals={this.props.availablePedals}/>
                 : null
        }
      </div>

      </>
    )
  }
}
