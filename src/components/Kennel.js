import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList2 from "./location/LocationList2"
import AnimalList from "./animals/AnimalList"
import "./Kennel.css"



class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
   // employees/locations/animals/owners data will eventually get pulled from the API
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
        { id: 1, name: "Murphy", breed: "Bubba" },
        { id: 2, name: "Bugsy", breed: "Lab-Mix" }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs" },
        { id: 6, name: "Angela Lee" }
    ]


    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList2 locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                {/* <EmployeeList  /> If you remove employees={this.state.employees} in the Kennel component, it can’t be passed down as props to the child component - it will simply live in state in the Kennel component, but the data will never reach a child component.*/}
                <AnimalList animals={this.state.animals} />
            </article>
        )
    }
}

export default Kennel