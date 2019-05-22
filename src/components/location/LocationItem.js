import React, { Component } from 'react';

class LocationItem extends Component {

    handleClick = (event) => {
        console.log("click", event, this.props.location.id)
        this.props.deleteAnimal(this.props.location.id)
    }

    render() {
        return (
            <article>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.location.name}
                            <button onClick={this.handleClick}>Delete</button>
                        </h5>
                    </div>
                </div>
            </article>
        )
    }
}

export default LocationItem;