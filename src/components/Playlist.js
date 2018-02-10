import React, { Component } from 'react'
import { FaClose } from 'react-icons/lib/fa'
import { iconSize } from '../constants'

class Playlist extends Component {
  render() {
    return (
      <div className="track-list">
        <div className="close-track-list">
          <button
            onClick={this.props.toggleDisplayPlaylist}
            title="Close Playlist"
          >
            <FaClose size={iconSize} />
          </button>
        </div>
        <div className="sticky-bar">
          <input
            type="text"
            name="song_search"
            id="song_search"
            className="song-search"
          />
        </div>
        <ul>
          {this.props.data.map(songObj => {
            return <li key={songObj.name}>{songObj.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Playlist