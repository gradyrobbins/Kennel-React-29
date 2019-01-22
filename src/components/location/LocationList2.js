import React, { Component } from 'react'
import './LocationList.css'

export default class LocationList2  extends Component {
    render() {


        

        return (
            <section className="locationList">Locations:
            {
                this.props.locations.map(location =>
                    <div className="locations" key={location.id}>
                        <h2>{location.name}</h2>
                        <h4>{location.address}</h4>
                        <br/>
                    </div>
                )
            }
            </section>
        )
    }
}