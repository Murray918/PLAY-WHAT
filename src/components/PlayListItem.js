import React, {Component} from 'react'

export default class PlayListItem extends Component {

  render(){

    let border = {
    border: '1px solid black'
  }

    let songs = this.props.arr.map( (song, index) => {

      return (
        <div style={border} key={index}>
          <div>User: {song.userName}</div> <br></br>
          <div>Artist/Band: {song.songArtist}</div> <br></br>
          <div>Title: {song.songTitle}</div> <br></br>
          <div>Notes: {song.songNotes}</div> <br></br>

        </div>
      );
    });
    return (
      <div>
        {songs}
      </div>
    )

}
}
