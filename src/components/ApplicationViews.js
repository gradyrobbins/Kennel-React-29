import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList2 from './location/LocationList2'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import Dashboard from './api/Dashboard'

// import AnimalManager from "../modules/AnimalManager"
// // Example code. Make this fit into how you have written yours.
// AnimalManager.getAll().then(allAnimals => {
//     this.setState({
//         animals: allAnimals
//     })
// })

class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "123 Main Street" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Doodles" },
        { id: 2, name: "Jack" },
        { id: 3, name: "Angus" },
        { id: 4, name: "Henley" },
        { id: 5, name: "Derkins" },
        { id: 6, name: "Checkers" }
    ]

    ownersFromAPI = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Shu" },
        { id: 3, name: "Dejan" },
        { id: 4, name: "Andy" },
        { id: 5, name: "Dek" },
        { id: 6, name: "Zac" }
    ]
    friendsFromAPI = [
        {
          "id": 1,
          "userName": "alagrad94",
          "firstName": "Russell",
          "lastName": "Reiter",
          "friends": [2,3]
        },
        {
          "id": 2,
          "userName": "johndoe1234",
          "firstName": "John",
          "lastName": "Doe",
          "friends": [1,3]
        },
        {
          "id": 3,
          "userName": "janedoe5678",
          "firstName": "Jane",
          "lastName": "Doe",
          "friends": [1,2]
        }
      ]
    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI,
        friends: this.friendsFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList2 locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners} />
                }} />
                <Route path="/friends" render={(props) => {
                    return <Dashboard friends={this.state.friends} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews