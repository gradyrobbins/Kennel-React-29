import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList2 from "./location/LocationList2"
import "./Kennel.css"


class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "123 Main Street" }
    ]



    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList2 locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />

                {/* <EmployeeList  /> If you remove employees={this.state.employees} in the Kennel component, it can’t be passed down as props to the child component - it will simply live in state in the Kennel component, but the data will never reach a child component.*/}
            </article>
        )
    }
}

export default Kennel