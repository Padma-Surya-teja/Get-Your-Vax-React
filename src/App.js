import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import Sessions from './Components/Sessions'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: "",
      longitude: "",
      districtid: "",
      pincode: "",
      permission: false
    }
  }
  getLocation = () => {
    this.setState({ permission: !this.state.permission });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      return "Geolocation is not supported by this browser.";
    }
  }

  showPosition = (position) => {
    this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude });
  }

  changedistrict = (event) => {
    this.setState({districtid : event.target.value });
  }
  changepincode = (event) => {
    this.setState({pincode : event.target.value });
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="mb-3">
            <label htmlFor="districtID" className="form-label">District Id</label>
            <input type="text" className="form-control" onChange={this.changedistrict} id="id" placeholder="512" />
          </div>
          <div className="mb-3">
            <label htmlFor="pincode" className="form-label">Pincode</label>
            <input type="text" className="form-control" onChange={this.changepincode} id="pincode" placeholder="512" />
          </div>
          <div className="checkbox">
            <label><input type="checkbox" onClick={this.getLocation} />Give Access to Location</label>
          </div>
          {this.state.permission && <Sessions latitude={this.state.latitude} longitude={this.state.longitude} districtId={this.state.districtid} pincode={this.state.pincode} />}
        </div>
      </div>
    )
  }
}

export default App
