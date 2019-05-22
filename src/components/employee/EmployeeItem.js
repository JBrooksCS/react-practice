import React, { Component } from 'react';
import person from './head_icon.png'

class EmployeeItem extends Component {

    state = {
        saveDisabled: false
    }

    handleClick = (event) => {
        console.log("click", event, this.props.employee.id)
        this.setState({
            saveDisabled:true
        })
        this.props.deleteAnimal(this.props.employee.id)
    }

    render() {
        return (
            <article>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                        <img alt="" src={person} className="icon--head" />
                            {this.props.employee.name}
                            <button onClick={this.handleClick} disabled={this.state.saveDisabled} className="card-link">Delete</button>
                        </h5>
                    </div>
                </div>
            </article>
        )
    }
}

export default EmployeeItem;