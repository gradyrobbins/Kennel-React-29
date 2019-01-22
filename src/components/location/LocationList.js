import React, { Component } from 'react'
import './LocationList.css'

export default class LocationList  extends Component {
    render() {
        return (
            <article className="locationList">
                <h1>Location List</h1>
                    <section><h2>North</h2>
                        <h3>Student Kennels</h3>
                        <h4>Nashville North Location</h4>
                        <h5>500 Puppy Way</h5>
                    </section>
                    <br/>
                    <section><h2>South</h2>
                        <h3>Main Kennels</h3>
                        <h4>Nashville South Location</h4>
                        <h5>123 Main Street</h5>
                    </section>
            </article>
        );
    }
}