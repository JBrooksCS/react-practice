import React, { Component } from 'react'
import EmployeeItem from './EmployeeItem'


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map((item) => {

                    return <EmployeeItem key={item.id} employee={item}
                    deleteEmployee={this.props.deleteEmployee} />
                    })
            }
            </section>
        )
    }
}

export default EmployeeList