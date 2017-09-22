import React, {Component} from 'react'

export default class PlayListForm extends Component {
  constructor(props) {
    super(props)

    this.addToList = this.addToList.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handleArtist = this.handleArtist.bind(this);
    this.handleNotes = this.handleNotes.bind(this);
    this.handleSongTitle = this.handleSongTitle.bind(this);

    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    }

  }


  addToList = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle: ''});
  }

  handleUserName(e){
    e.preventDefault();
    this.setState({userName:e.target.value})
  }

  handleArtist(e){
  e.preventDefault();
  this.setState({songArtist : e.target.value})
  }

  handleNotes(e){
  e.preventDefault();
  this.setState({songNotes : e.target.value})
  }

  handleSongTitle(e){
  e.preventDefault();
  this.setState({songTitle : e.target.value})
  }

  render() {
    return (

      <div className="container">
<form onSubmit={this.addToList}>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">User Name:</label>
    <div className="col-sm-10">
      <input onChange={this.handleUserName} type="text" className="form-control" value={this.state.userName} placeholder="User Name"/>
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">Artist:</label>
    <div className="col-sm-10">
      <input onChange={this.handleArtist} value={this.state.songArtist} type="text" className="form-control"  placeholder="Enter Artist"/>
    </div>
  </div>
    <div className="form-group row">
      <label  className="col-sm-2 col-form-label">Song Title:</label>
      <div className="col-sm-10">
        <input onChange={this.handleSongTitle} value={this.state.songTitle} type="text" className="form-control"  placeholder="Enter Song Title"/>
      </div>
    </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Notes:</label>
        <div className="col-sm-10">
          <textarea onChange={this.handleNotes} value={this.state.songNotes} type="text" className="form-control"  placeholder="Enter Song Notes"></textarea>
        </div>
        <button type="button" onClick={this.addToList} className="btn btn-success">Add To List</button>
      </div>
  </form>
  <hr/>
</div>
      );
    }
  }
