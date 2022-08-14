import React, { Component } from 'react'
import Session from './Session';
import { SortData } from './SortData';

export class Sessions extends Component {
    constructor() {
        super();
        this.state = {
            sessions: [],
            loading: false,

        }
    }
    async componentDidMount() {
        let date = (new Date()).toISOString().split('T')[0];
        let arr = date.split("-");
        date = arr[2] + "-" + arr[1] + "-" + arr[0];
        let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${this.props.districtId}&date=${date}`;
        let data = await fetch(url);
        let parsedData = await data.json()

        let locationObject = { longitude: this.props.longitude, latitude: this.props.latitude, pincode: this.props.pincode };
        let sortedData = SortData(parsedData.sessions, locationObject);
        this.setState({ sessions: sortedData });
    }
    render() {
        return (
            <>
                {this.state.sessions.length===0 ? <h1>No Sessions Available</h1> : this.state.sessions.map((element) => {
                    let key = element.name+"/"+element.center_id+"/"+element.pincode;
                    return <div key={key} className="md-3" style={{padding: "3px"}}>
                        <Session session={element} />
                    </div>
                })}
            </>
        )
    }
}

export default Sessions
