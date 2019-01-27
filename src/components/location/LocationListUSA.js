import React, { Component } from 'react'
import './LocationList.css'

export default class LocationListUSA  extends Component {
    render() {




        return (
            <section className="locationList">USA:
            {
                this.props.usa.map(object =>
                    <div className="locations" key={object.state_id}>
                        <h2>{object.name}</h2>
                        <h4>Motto: {object.Motto}</h4>
                        <br/>
                    </div>
                )
            }
            </section>
        )
    }
}