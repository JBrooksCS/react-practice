import React, { Component } from 'react';
import building from "./building_icon.svg"

class LocationItem extends Component {

    state = {
        saveDisabled: false
    }


    handleClick = (event) => {
        console.log("click", event, this.props.location.id)
        this.setState({
            saveDisabled:true
        })
        this.props.deleteAnimal(this.props.location.id)
    }

    render() {
        return (
            <article>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                        <img alt="" src={building} className="icon--building" />
                            {this.props.location.name}
                            <button onClick={this.handleClick} disabled={this.state.saveDisabled} className="card-link">Delete</button>
                        </h5>
                    </div>
                </div>
            </article>
        )
    }
}

export default LocationItem;