import React, { Component } from 'react'
import './AnimalList.css'

export default class AnimalList  extends Component {
    render() {
        return (
            <section className="animalList">
            Animals:
            {
                this.props.animals.map(animal =>
                    <div className="animals" key={animal.id}>
                        {animal.name}
                        <br/>
                    </div>
                )
            }
            </section>
        )
    }
}