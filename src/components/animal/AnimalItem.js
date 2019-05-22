import React, { Component } from 'react';
import dog from "./DogIcon.svg"
import "./Animal.css"

class AnimalItem extends Component {

    handleClick = (event) => {
        console.log("click", event, this.props.animal.id)
        this.props.deleteAnimal(this.props.animal.id)
    }

    render() {
        return (
            <article>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={dog} className="icon--dog" />
                            {this.props.animal.name}
                            <button onClick={this.handleClick} className="card-link">Delete</button>
                        </h5>
                    </div>
                </div>
            </article>
        )
    }
}

export default AnimalItem;