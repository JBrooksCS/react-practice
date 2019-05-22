import React, { Component } from 'react';
import person from './person_icon.png'

class EmployeeItem extends Component {

    handleClick = (event) => {
        console.log("click", event, this.props.employee.id)
        this.props.deleteAnimal(this.props.employee.id)
    }

    render() {
        return (
            <article>
                <div className="card">
                    <div className="card-body">
                    <img src={person} className="icon--person" />
                        <h5 className="card-title">
                            {this.props.employee.name}
                            <button onClick={this.handleClick}>Delete</button>
                        </h5>
                    </div>
                </div>
            </article>
        )
    }
}

export default EmployeeItem;