import React, {Component} from 'react'

export default class PlayListItem extends Component {

  render(){


    let songs = this.props.arr.map( (song, index) => {

      return (
<div className="row playlistItem" key={index}>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-block">
        <h6 className="card-title">User: {song.userName}</h6>
        <p className="card-text">Artist/Band: {song.songArtist}</p>
        <p  className="card-text">Title: {song.songTitle}</p>
        <p className = "card-text">Notes: {song.songNotes}</p>
      </div>
    </div>
  </div>
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
