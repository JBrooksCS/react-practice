import React, { Component } from 'react';
import "./Animal.css"
import dog from "./DogIcon.svg"
import { Link } from "react-router-dom";

class AnimalItem extends Component {

state = {
    saveDisabled: false
}

    handleClick = (event) => {
        console.log("click", event, this.props.animal.id)
        this.setState({
            saveDisabled:true
        })
        this.props.deleteAnimal(this.props.animal.id)
    }
    render() {
        return (
            <article>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                        <img alt="" src={ dog } className="icon--dog" />
                            {this.props.animal.name}
                            <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                            <button onClick={this.handleClick} disabled={this.state.saveDisabled} className="card-link">Delete</button>
                        </h5>
                    </div>
                </div>
            </article>
        )
    }
}

export default AnimalItem;