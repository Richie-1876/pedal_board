import React, { Component } from 'react'

export default class Artist extends Component {
  render () {
    return(
      <>
      <div className="artist-container">
        <img src={this.props.artist.image} />
        <h2>{this.props.artist.name}</h2>
        <h3>Band: {this.props.artist.band}</h3>
        <a href={this.props.artist.wiki} target='_blank'>More Info</a>
        <button className="btn btn-danger"onClick={()=> this.props.deleteArtist(this.props.artist.id)}>DELETE</button>
      </div>

      </>
    )
  }
}
