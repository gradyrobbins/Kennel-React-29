import React, { Component } from 'react'
import './OwnersList.css'

export default class OwnersList  extends Component {
    render() {
        return (
            <section className="ownersList"> Doggie Owners:
            {
                this.props.owners.map(owner =>
                    <div className="owner" key={owner.id}>
                        #{owner.id}:  {owner.name}
                    </div>
                )
            }
            </section>
        )
    }
}