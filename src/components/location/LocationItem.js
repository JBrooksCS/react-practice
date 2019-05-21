import React, { Component } from 'react';

class LocationItem extends Component {

    handleClick = (event) => {
        console.log("click", event, this.props.location.id)
        this.props.deleteAnimal(this.props.location.id)
    }

    render() {
        return (
            <article>
                <h3>{this.props.location.name}</h3>
                <button onClick={this.handleClick}>Delete</button>
            </article>
        )
    }
}

export default LocationItem;