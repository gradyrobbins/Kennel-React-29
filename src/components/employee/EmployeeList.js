import React, { Component } from 'react'
import './EmployeeList.css'

export default class EmployeeList  extends Component {
    render() {
        return (
            <section className="employeeList"> Employees:
            {
                this.props.employees.map(employee =>
                    <div className="employees" key={employee.id}>
                        {employee.name}
                    </div>
                )
            }
            </section>
        )
    }
}