import React, { Component } from 'react';
import person from './person_icon.png'

class OwnerItem extends Component {

    state = {
        saveDisabled: false
    }

    handleClick = (event) => {
        console.log("click", event, this.props.owner.id)
        this.setState({
            saveDisabled:true
        })
        this.props.deleteAnimal(this.props.owner.id)
    }

    render() {
        return (
            <article>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                        <img alt="" src={person} className="icon--owner" />
                            {this.props.owner.name}
                            <button onClick={this.handleClick} disabled={this.state.saveDisabled} className="card-link">Delete</button>
                        </h5>
                    </div>
                </div>
            </article>
        )
    }
}

export default OwnerItem;