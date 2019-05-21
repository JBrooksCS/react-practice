import React, { Component } from 'react';

class EmployeeItem extends Component {

    handleClick = (event) => {
        console.log("click", event, this.props.employee.id)
        this.props.deleteAnimal(this.props.employee.id)
    }

    render() {
        return (
            <article>
                <h3>{this.props.employee.name}</h3>
                <button onClick={this.handleClick}>Delete</button>
            </article>
        )
    }
}

export default EmployeeItem;