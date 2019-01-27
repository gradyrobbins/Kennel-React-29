import React, { Component } from 'react'
import './Card.css'

export default class Dashboard extends Component {

    render() {

        return (

          <section className="Card">
            {
                this.props.friends.map(user =>
                <div key={user.id} className="card">
                <h5 className="card-title">{`User: `}{user.firstName} {user.lastName}</h5>
                <h5 className="card-subtitle mb-2 text-muted">Friends:</h5>
                {
                user.friends.map(buddy =>
                this.props.friends.filter(user => user.id === buddy).map(friend =>
                    <div key={friend.id} className="friend">
                    {friend.firstName} {friend.lastName}
                    </div>
                )
                )}
                </div>
            )
            }
          </section>
        )
      }

}