import React, { Component } from 'react'

export class Session extends Component {
    render() {
        let { session } = this.props;
        return (
            <div className="card">
                <div className="card-header">
                    <b>center_id : {session.center_id}</b>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{session.name}</h4>
                    <p className="card-text"><b>Address : </b>{session.address},{session.district_name},{session.state_name}</p>
                    <p className="card-text"><b>Block Name : </b>{session.block_name}</p>
                    <p className="card-text"><b>from : </b>{session.from}<b> to :</b>{session.to}   <b>Fee Type : </b>{session.fee_type}  <b>Availability : </b>{session.available_capacity}  </p>
                    <p className="card-text"><b>Vaccine : </b>{session.vaccine}</p>
                    <div className="card text-center">
                    {session.slots.map((slot) => {
                        return <p><b>time : </b>{slot.time}<b> seats : </b>{slot.seats}</p>
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Session
