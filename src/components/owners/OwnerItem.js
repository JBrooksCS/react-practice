import React, { Component } from 'react';

class OwnerItem extends Component {

    handleClick = (event) => {
        console.log("click", event, this.props.owner.id)
        this.props.deleteAnimal(this.props.owner.id)
    }

    render() {
        return (
            <article>
                <h3>{this.props.owner.name}</h3>
                <button onClick={this.handleClick}>Delete</button>
            </article>
        )
    }
}

export default OwnerItem;